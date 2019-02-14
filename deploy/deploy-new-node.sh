
# Consulto el pod para saber el id
kubectl --kubeconfig="/home/andy/.kube/digitalocean.yaml" -n app get pods

# Consulto en que node está el pod
kubectl --kubeconfig="/home/andy/.kube/digitalocean.yaml" describe pod -n app app-68cbcf4c55-6rcz5
Name:               app-68cbcf4c55-6rcz5
Namespace:          app
Priority:           0
PriorityClassName:  <none>
Node:               unruffled-kepler-u8jy/10.131.59.57

# Consotrolo que ese node tenga el label de firewall /lb 
kubectl --kubeconfig="/home/andy/.kube/digitalocean.yaml" -n kube-system get nodes --show-labels

# Aplico el label
kubectl --kubeconfig="/home/andy/.kube/digitalocean.yaml" label node/unruffled-kepler-8j4d kubernetes.io/lb=true

# Controlo que se haya realizado el cambio
kubectl --kubeconfig="/home/andy/.kube/digitalocean.yaml" -n kube-system get nodes --show-labels
