



pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'  
                bat 'npx cypress install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm run e2e'
            }
        }
       
    }
}
