# pagamentos-api-app-gitops
# Aplicacao NodeJS de api de pagamentos para testes em esteira gitops-workloads-helm e gitops-infra

Com essa aplicação é possível gerar um pipeline de CI/CD (Continuous Integration/Continuous Deployment)


<!-- readme-tree start -->


<!-- readme-tree end -->


Observando a árvore temos o código fonte em NodeJs na raiz do repositório.
O arquivo Dockerfile é para ajudar no direcionamento e criação da imagem de container.

O diretório k8s possui detalhes do workflow de CI para que o desenvolvedor possa criar o pipeline utilizando OpenShift Pipelines (TekTon), basta seguir a ordem numérica dos arquivos e já poderá criar o build para as imagens da aplicação.




