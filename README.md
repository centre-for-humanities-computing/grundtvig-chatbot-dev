# grundtvig-chatbot-dev
A danish chatbot with N. F. S. Grundtvig. [try it here](https://centre-for-humanities-computing.github.io/grundtvig-chatbot-app/)

## For developers
In order to push your changes to the production repository of this app directly you need to [setup an ssh key for your github account](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

 4) clone this repository
 4) enter it
    ```
    cd grundtvig-chatbot-dev/
    ```
 4) install dependencies
    ```
    npm i
    ```
 4) launch the development server
    ```
    npm run serve
    ```
 4) make changes 
 4) build and deploy the app
    ```
    sudo bash ./deploy.sh
    ```
```./deploy.sh``` transpiles the code and pushes the contents of ```./dist/``` to the gh-pages branch of the production repository on github.com

