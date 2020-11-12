# cypress-ui-api-googlesearch

Steps to run this framework:
1. Download and install nodejs from https://nodejs.org/en/download/
2. Clone this repo
   
   $git clone https://github.com/mikeywan/cypress-ui-api-googlesearch
   
   $git checkout master
   
   $git pull
3. Install cypress from folder cypress-ui-api-googlesearch
   
   $npm install cypress --save-dev
4. Run ui test
   
   $./node_modules/cypress/bin/cypress run --env FRONTEND_URL=https://www.google.co.nz,BACKEND_URL=https://www.google.co.nz --spec 'cypress/integration/googlesearch/**/*'
5. Run api test
   
   $./node_modules/cypress/bin/cypress run --env FRONTEND_URL=https://www.google.co.nz,BACKEND_URL=https://www.google.co.nz --spec 'cypress/integration/api/**/*'
6. Run ui&api test
   
   $./node_modules/cypress/bin/cypress run --env FRONTEND_URL=https://www.google.co.nz,BACKEND_URL=https://www.google.co.nz
7. CI support
   
   a. Install docker desktop from https://www.docker.com/products/docker-desktop
   
   b. Running following command to build and run ui image:
      
        $docker build -t cypress-googlesearch-ui -f UiTests.Dockerfile .
      
        $docker run cypress-googlesearch-ui
   
   c. Running following command to build and run api image:
      
        $docker build -t cypress-googlesearch-api -f ApiTests.Dockerfile .
      
        $docker run cypress-googlesearch-api
