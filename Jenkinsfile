pipeline {
  agent any

  // tools {nodejs "recent node"}

  stages {    
    // https://stackoverflow.com/questions/44928459/is-it-possible-to-rename-default-declarative-checkout-scm-step
    // stage('Checkout') {
    //   steps {
    //     git 'https://github.com/rorybe/ngx-fiori-md.git'
    //   }
    // }        
    stage('Install') {
      steps {
        nodejs(nodeJSInstallationName: 'recent node') {
          sh 'node -v'
          sh 'npm i'
        }
      }
    }     
    stage('Build') {
      steps {
        nodejs(nodeJSInstallationName: 'recent node') {
          sh 'node ./node_modules/@angular/cli/bin/ng build --prod --build-optimizer=false --stats-json'
          sh 'npm run analyze'
        }  
      }
    }
    stage('Unit test') {
      steps {
        nodejs(nodeJSInstallationName: 'recent node') {
          sh 'npm run build:test -- --code-coverage'
        }  
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
