window.onload = function() {
    // Precios asociados a cada opción de producto
    const precios = {
      "100": 100,
      "150": 150,
      "200": 200
    };
  
    // Descuento por plazo de entrega
    const descuentoPorPlazo = 0.05; // 5%
  
    // Precios adicionales por extras
    const preciosExtras = {
      "50": 50,
      "75": 75,
      "100": 100
    };
  
    const presupuestoOutput = document.getElementById("presupuesto");
    const productSelect = document.getElementById("product");
    const plazoInput = document.getElementById("plazo");
    const extrasCheckboxes = document.querySelectorAll("input[name='extras[]']");
    const condicionesCheckbox = document.getElementById("terms");
    const enviarButton = document.querySelector("button[type='submit']");
    const resetButton = document.querySelector("button[type='reset']");
  
    function calcularPresupuesto() {
      let precioBase = precios[productSelect.value];
      let descuento = 0;
      if (plazoInput.value) {
        const plazo = parseInt(plazoInput.value);
        descuento = precioBase * descuentoPorPlazo * plazo;
      }
  
      let precioTotal = precioBase - descuento;
  
      extrasCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          precioTotal += preciosExtras[checkbox.value];
        }
      });
  
      presupuestoOutput.textContent = precioTotal.toFixed(2);
    }
  
    function validarFormulario() {
      let todosValidos = true;
      if (!condicionesCheckbox.checked) {
        todosValidos = false;
      }
      enviarButton.disabled = !todosValidos;
    }
  
    productSelect.addEventListener("change", calcularPresupuesto);
    plazoInput.addEventListener("input", calcularPresupuesto);
    extrasCheckboxes.forEach(checkbox => {
      checkbox.addEventListener("change", calcularPresupuesto);
    });
    condicionesCheckbox.addEventListener("change", validarFormulario);
    resetButton.addEventListener("click", function() {
      presupuestoOutput.textContent = "0.00";
    });
  
    validarFormulario();
  };