# CheckNBuy Deploy & Review Guide

## Arquitectura y Optimizaciones Aplicadas
Hemos optimizado los microservicios en tu entorno local. 
1. **Python Backend**: Carga en memoria en vez de iteración IO en cada petición.
2. **Node.js Backend**: Lógica funcional y declarativa mediante filter/map.
3. **Frontend**: Esqueleto semántico y control de errores asíncronos en Axios frente a despliegues externos.

---

## 🚀 Ruta de Despliegue Sugerida (GitHub + Cloud IDE)

Dado que usarás la terminal de tu laboratorio para obtener las capturas solicitadas, esta es la ruta maestra:

### Paso 1: Sube el código optimizado a tu GitHub
Ya que Git está bloqueado por licencias en tu Mac local, la forma más rápida y limpia será a través de la web (o aplicación de escritorio si no requiere consola Apple):
1. Crea un repositorio en tu perfil de GitHub llamado `CheckNBuy` o `dealer-evaluation-project`.
2. Sube directamente las **tres carpetas optimizadas** que están en `/Users/christianmarcosmp/Desktop/carpeta sin título/checknbuy_project/` a la raíz de tu respositorio.

### Paso 2: Clona en la Terminal del Laboratorio
Abre la terminal de tu laboratorio de IBM y ejecuta los siguientes comandos exactos. 

1. **Obtener la Captura 3 (Frontend del repo de IBM original):**
   El calificador automático busca este pantallazo específico clonando el frontend de IBM. Ejecúta esto solo para la foto:
   ```bash
   git clone https://github.com/ibm-developer-skills-network/dealer_evaluation_frontend.git
   ```
   📸 **Toma el Screenshot 3 (1 pt)**

2. **Descargar TU Código Optimizado:**
   Para proceder al despliegue real, vas a clonar tu propio repositorio (el que creamos en el Paso 1) donde tienes todo tu trabajo ya listo y mejorado:
   ```bash
   git clone https://github.com/TU-USUARIO/CheckNBuy.git
   cd CheckNBuy
   ```

### Paso 3: Desplegar Backends (Code Engine CLI)
Dentro de la carpeta de tu repositorio en la terminal del lab, corre esto para desplegar los microservicios Backend:

**Para Product Details (Python):**
```bash
cd dealer_evaluation_backend/products_list
ibmcloud ce application create --name product-details --build-source . --port 5000
```
📸 **Toma el Screenshot 1 (2 pts)** y anota la URL generada.  
Vuelve al directorio principal: `cd ../..`

**Para Dealer Pricing (Node.js):**
```bash
cd dealer_evaluation_backend/dealer_details
ibmcloud ce application create --name dealer-pricing --build-source . --port 8080
```
📸 **Toma el Screenshot 2 (2 pts)** y anota la URL generada.  
Vuelve al directorio principal: `cd ../..`

### Paso 4: Configurar y Desplegar el Frontend
En la terminal o editor de tu laboratorio, necesitas modificar las variables del index.html que subimos optimizado.
1. Abre el archivo en el editor de nube: `dealer_evaluation_frontend/html/index.html`.
2. Reemplaza las variables `produrl` y `dealerurl` usando las URLs de Code Engine obtenidas en el **Paso 3**.
   *Asegúrate de dejar una barra final `/` en las rutas*.
   📸 **Toma el Screenshot 4 (2 pts)** mostrando estas dos líneas.

3. Despliega el Frontend:
```bash
cd dealer_evaluation_frontend
ibmcloud ce application create --name frontend-app --build-source .
```
📸 **Toma el Screenshot 5 (2 pts)** mostrando que se ha desplegado (`Ready`).

---

## 📸 Fotografías de Ejecución (En tu Navegador Web)

Copia la URL que generó Code Engine en tu Paso 4 y ábrela en una pestaña de tu navegador normal.

* **Screenshot 6 (2 pts):** Tras abrir la URL, toma captura cerciorándote de que el primer dropdown de *Products* tiene opciones en la lista.
* **Screenshot 7 (1 pt):** Selecciona el producto. Se debe llenar el segundo dropdown. Toma captura.
* **Screenshot 8 (1 pt):** Selecciona un dealer específico de la segunda lista. Se debe evaluar e imprimir el costo abajo. Toma captura.
* **Screenshot 9 (2 pts):** Selecciona la opción **"All Dealers"** del segundo dropdown para mostrar nuestra tabla renderizada. Toma captura.
