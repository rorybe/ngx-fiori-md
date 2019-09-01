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
    stage('Unit tests') {
      steps {
        nodejs(nodeJSInstallationName: 'recent node') {
          sh 'npm run build:test -- --code-coverage'
        }  
      }
    }
    stage('E2E tests') {
      steps {
        // sh 'Xvfb :0 -ac -screen 0 1024x768x24 &'
        nodejs(nodeJSInstallationName: 'recent node') {
          sh 'npm run e2e'
          // sh 'killall Xvfb'
        }  
      }
    }
    stage('Deploy') {
      parallel {
        stage('Production') {
          when {
            branch 'master'
          }
          steps {
            withAWS(region:'ap-southeast-2',credentials:'${env.altAWS}') {
              s3Delete(bucket: '${env.AWS_BUCKET}', path:'**/*')
              s3Upload(bucket: '${env.AWS_BUCKET}', workingDir:'build', includePathPattern:'**/*');
            }
            mail(subject: 'Production Build', body: 'New Deployment to Production', to: 'rorber@outlook.com')
          }
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
      publishHTML target: [
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: './e2e/screenshots',
        reportFiles: 'index.html',
        reportName: 'E2E Screenshots'
      ]
    }
  }
}
