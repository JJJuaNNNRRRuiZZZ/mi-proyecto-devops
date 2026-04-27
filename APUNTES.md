# Mi Ruta DevOps - Bitácora de Aprendizaje

## 1. Gestión de Versiones (Git & GitHub)
* **¿Qué es?** Es una "máquina del tiempo" para mi código. Me permite guardar fotos (commits) de mi trabajo y enviarlas a un lugar seguro en la nube (GitHub).
* **Comandos clave:** `git add` (preparar), `git commit` (tomar la foto), `git push` (subir a la nube).

## 2. Contenedores (Docker)
* **¿Qué es?** Es una caja aislada donde meto mi aplicación y todo lo que necesita para funcionar. 
* **¿Por qué se usa?** Para acabar con el problema de "en mi máquina sí funciona, pero en la tuya no". Un contenedor corre exactamente igual en mi laptop, en AWS o en Google Cloud.

## 3. La Nube (Google Cloud / GCP)
* **IaaS (Infraestructura como Servicio):** Alquilamos una Máquina Virtual (Compute Engine) en la nube.
* **IP Externa:** Es el número público por el que cualquier persona en el mundo puede ver mi aplicación (ej. `http://35.224.128.188`).
* **Firewall:** Reglas de seguridad. Tuvimos que abrir el puerto HTTP (80) para que la web funcionara.

## 4. Despliegue Manual con Docker
Para encender la aplicación en el servidor de Google Cloud usamos:
* `sudo docker pull [usuario]/[imagen]:latest` -> Descarga la imagen más reciente de Docker Hub.
* `sudo docker run -d -p 80:3000 [usuario]/[imagen]:latest` -> Enciende el contenedor.
  * `-d`: (Detached) Corre en segundo plano para no bloquear la consola.
  * `-p 80:3000`: Conecta el puerto 80 del servidor (internet) con el 3000 del contenedor (mi app Express).
* `sudo docker ps` -> Muestra los contenedores vivos.
* `sudo docker logs [ID]` -> Muestra la "caja negra" o errores de un contenedor si llega a fallar.
