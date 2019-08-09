pipeline {
  agent any

  tools {nodejs "recent node"}

  stages {    
    // stage('Checkout') {
    //   steps {
    //     git 'https://github.com/rorybe/ngx-fiori-md.git'
    //   }
    // }        
    stage('Install') {
      steps {
        sh 'npm i'
      }
    }     
    stage('Build') {
      steps {
        sh 'node ./node_modules/@angular/cli/bin/ng build --prod --build-optimizer=false --stats-json'
        sh 'npm run analyze'
      }
    }
    stage('Unit test') {
      steps {
        sh 'npm run build:test -- --code-coverage'
      }
    } 
  }    
  post {
    success {
      publishHTML target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: './coverage/ng-fiori-md/',
        reportFiles: 'index.html',
        reportName: 'Code Coverage'
      ]
        publishHTML target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: './',
        reportFiles: 'report.html',
        reportName: 'Bundle Analyser'
      ]
    }
  }
}
