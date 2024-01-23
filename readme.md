## Commands

mkdir node-file-demo
 1072  cd node-file-demo
 1073  ls
 1074  npm init -y
 1075  npm i express nodemon
 1076  code .
 1077  npm start
 1078  docker login
 1079  docker build -t kshitijg/node-app-k8:1 .
 1080  docker build -t kshitijg/node-app-k8:2 .
 1081  docker push kshitijg/node-app-k8:2
 1082  minikube start
 1083  minikube status
 1084  kubectl create deployment node-app-k8 --image=kshitijg/node-app-k8:2
 1085  kubectl logs node-app-k8
 1086  kubectl get deployments
 1087  kubectl get pods
 1088  docker push kshitijg/node-app-k8:2
 1089  kubectl create deployment node-app-k8 --image=kshitijg/node-app-k8:2
 1090  kubectl get pods
 1091  kubectl get deployments
 1092  kubectl get pods
 1093  kubectl get deployments
 1094  kubectl logs node-app-k8
 1095  kubectl logs node-app-k8-56466fcf5f-bgqlw
 1096  kubectls describe deploy node-app-k8
 1097  kubectl describe deploy node-app-k8
 1098  kubectl get pods
 1099  kubectl describe deployment node-app-k8 --type=LoadBalancer --port=3200
 1100  kubectl expose deployment node-app-k8 --type=LoadBalancer --port=3200
 1101  kubectl get service
 1102  minikube services node-app-k8
 1103  minikube service node-app-k8