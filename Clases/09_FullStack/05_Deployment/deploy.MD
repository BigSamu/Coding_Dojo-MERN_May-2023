# Deployment Guide AWS

## Changes in Code

Before starting, run following changes in code:
  - For client side (inside `client` folder):
     - Create `config.js` file under `src` folder for creating a baseUrl variable and add the code below:
       ```js
         const environments = {
           development: "http://localhost:8080",
           production: "",
         };

         const baseUrl = environments[process.env.NODE_ENV] || "";

         console.log(process.env.NODE_ENV)
         console.log(baseUrl)

         export { baseUrl };
       ```
     - For all components calling the endpoint to `http://localhbost:8080` change them using the variable `baseUrl`. In other words, change the url enpoints in the API calls such `http://localhost:8080/api/pets` or `http://localhost:8080/api/pets/${petId}` to `${baseUrl}/api/pets` or `${baseUrl}/api/pets/${petId}` in all components. Remember that variable `baseUrl` need to be imported in the component before using it (```import {baseUrl} from ../config.js```).

     - Prepare `build` folder running the following command: `npm run build` (Remeber to be located inside `client` folder)
     - Go to .gitignore file in `client` and comment line that contains `/build` (line 12)

  - Server Side (inside `server` folder):
    - Generate a .gitignore file and add the following:
      ```sh
      node_modules
      .DS_Store # This line only for Mac users
      .env
      ```
    - Generate a file `.env` using the command `touch .env` (Remeber to be located inside `server` folder). Inside that folder add the following enviromental variables:
      ```
      JWT_SECRET = <your_JWT_key>
      PORT = 8080
      ```
    - In server.js change the port definition from `const port = 8000;` to `const port = process.env.PORT;`
      > NOTE: For the porpouse of the deployment we will use port 8080, instead of 8000 in the server side.

  - Check that with all these changes your MERN application is still working

## Create EC2 Instance in AWS

  - Go to https://console.aws.amazon.com/
  - Create AWS account (1 year free for first users)
  - Once in the main console, create a new EC2 Instance (*Lanzar Instancia E2C*). A new page will be open
    - In *Nombre y etiquetas* add a name for the instance
    - In *Imagenes de aplicaicones y sistemas operativos(Amazon Machine Image)* select: "Ubuntu Server 22.04 LTS (HVM), SSD Volume Type"
    - In *Tipo de Instancia* select: "t2.micro"
    - In *Par de claves(inicio de sesion)*, create a pair of keys using RSA encryption. For that insert a name for that pair (*Nombre del par de claves*) and select `.pem` format. Once finish download the `.pem` file and save it in a secure place in your computer (NOT in the project folder).
    - In *Configuracion de red* select option *crear grupo de seguridad*. Under this same panel select the options *Permitir el tráfico de SSH desde Mi IP* (rember to select *Mi IP* and not *Cualquier lugar*), *Permitir el tráfico de HTTPS desde Internet* and *Permitir el tráfico de HTTP desde Internet*.
    - In *Configuracion de Almacenamiento* keep the default values.
    - Press orange button *Lanzar Instancia* at the bottom right
  - Go to instances table, select instance and then go to panel below and look for the tab *Seguridad*. Once there click in the link below *Grupos de Seguridad* (such `sg-09405f34f5ffa0d71 (launch-wizard-5)`). Once in the specific security group, make sure that in the bottom tabs *Reglas de Entrada* y *Reglas de Salida* have the configurations below. If not add them by clicking *Editar reglas de salida*
    - Cambiar "SSH TCP 22 My IP " (El IP se generará)
    - Añadir "HTTP TCP 80 Anywhere-IPv4 (0.0.0.0/0)"
    - Añadir "HTTPS TCP 443 Anywhere-IPv4 (0.0.0.0/0)"
  - After finishing with the security groups return to instances table and click on instance. Once clicked the button *Conectar* will be available. Click on that button and follow the instructions
    - Open your terminal
    - Go to folder where you save the pem key and run command `chmod 400 <key_name>.pem`
    - Go back to instructions and copy the command for stablishing a SSH session with the server. Something like `ssh -i "<key_name>.pem" ubuntu@ec2-35-160-97-190.us-west-2.compute.amazonaws.com`. Then paste that command in your terminal and press enter
    - Press Y or Yes to continue
    - You should be connected to the server now. DO NOT CLOSE THIS WINDOW AFTER FINISHING DEPLOYMENT
    - For exiting the SSH session you need to run the command `exit`. Sometimes it is required to run that command twice.

## EC2 Instance Instalations

  - Once connected to the EC2 instance, execute the following command in terminal for installing nginx (web server) and git (version control system):

    ```sh
    bash
    sudo apt update
    sudo apt install nginx git -y
    ```

  - Then install NVM (Node Version Manager for later installing Node.js and NPM (Node Package Manager). For that run all the commands below, step by step

    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.1/install.sh | bash
    source ~/.bashrc # for updating changes
    nvm --version # for checking version of NVM and see that is correctly installed
    nvm install v14 # for installing Node.js and NPM
    node -v # for checking if Node.js was installed correctly
    npm -v # for checcking if NPM was installed correctly
    ```
  - If NPM was not installed (not receiving output for command `npm -v`), run the following
    ```sh
    sudo apt install npm
    ```
  - Once done, run following command for installing `build-essential` package (set of tools and libraries required to compile abd build software from source code in Debian-based Linux distributions like Ubuntu)
    ```sh
    sudo apt install build-essential
    ```

#  Cloned MERN app aplication to EC2 Instance

  -  Create repositorory and upload code to it.
  -  Go to Terminal with SSH conection to EC2 instance and clone repo project (`git clone <url-to-github-repo-project> MERN_Deployment`)
  - Create enviromental variable in server running following commands
    ```sh
    export repoName=MERN_Deployment # for creating enviromental variable
    echo $repoName # for checking enviromental variable was created correctly
    ```

# Setting Frontend of MERN Application (React)

  - Run the following commands for changing the default html code from nginx with the one created in the *build* distribution from the `client` folder (the one we generate at the beginning)
  ```sh
  cd ~/$repoName/client # for moving to client folder
  sudo rm -rf /var/www/html # for deleting html content in /var/www/html (default from nginx)
  sudo mv build /var/www/html # for replacing html content created by build distribution in same location
  sudo service nginx restart # for restarting nginx web server
  ```

  - Once ready, you should see the React application up an running when you visit your  Public I of the EC2 instance (i.e. 15.228.241.150). For checking, open a web browser and in the URL bar write `http://<your-public-IP-addres>` of EC2 instance
    > *NOTE*: You should use `http` and NOT `https` when adding the address in the URL bar. If doesn't appear please check the URL bar. Most probably you are trying to access it with `https`


# Setting Backend of MERN Application (Express and Mongo)

  - Run the following commands:
    ```sh
      cd ~/$repoName/server # for moving to server folder
      npm install # for installing depencies in backend such as express.js, mongoose.js, etc
    ```
  - In same folder run the following commands for installing MongoDB 6.0 and get its service up and running
    ```sh
    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc |  gpg --dearmor | sudo tee /usr/share/keyrings/mongodb.gpg > /dev/null
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
    sudo apt update
    sudo apt install -y mongodb-org
    sudo service mongod start
    ```
  - Check if Mongo service is up and running. A document will be openned. If all OK, press `:q` to exit
    ```sh
    service mongod status
    ```

# Setting NGINX

  - Remove default configuration of nginx and add a customized one using *Vim* Editor
    ```sh
    sudo rm /etc/nginx/sites-available/default
    sudo vim /etc/nginx/sites-available/default
    ```
  - Once in *Vim* editor, copy and paste code below. Remeber that to enter insert mode, you need to press `SHIFT+I`. Then you copy the code below and paste it. Once finsih you need exit insert mode by pressing `Esc`. Then you to save changes and exit *VIM* editor. For that write `:wq` and then press `Enter`
    ```
    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;
        server_name MERN_deployment;
        location /api {
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
        location / {
            try_files $uri $uri/ =404;
        }
        error_page 404 /index.html;
    }
    ```
  - Create .env file to create the enviromental variables for JWT_SECRET and PORT. Once again you will need to use *Vim* Editor.
    - First run the following commands
    ```
    sudo touch .env
    sudo vim .env
    ```
    - The copy and paste the code below and save changes
    ```
    JWT_SECRET = <your_JWT_key>
    PORT = 8080
    ```
  - Test the configuration file is OK. If all Ok, restart nginx server and then run backkend

    ```sh
    sudo nginx -t # for testing configuration file for nginx
    sudo service nginx restart # for restarting nginx web server
    npm run start server.js # for running express backend
    ```


  - Once ready, go back to your browser and visit once again the API address of your application deployed (`http://<your-public-IP-addres>`). Your backend should be fully operational and working with your frontend

# Setting PM2

  - For keeping the backend running in second plane, without the need of keeping the ssh session open we need to install PM2. For that run the following command
  ```sh
  npm i pm2 -g
  ```
  - Run backend using PM2
  ```sh
  pm2 start server.js --name MERN_deployment
  ```
  - Check that it is workin
  ```sh
  pm2 logs
  ```
  - If logs appearing, then backend is running using PM2. Now you are ready to exit SSH session. The website is fully deployed
