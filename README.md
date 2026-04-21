# pagamentos-api-app-gitops
# Aplicacao NodeJS de api de pagamentos para testes em esteira gitops-workloads-helm e gitops-infra

Com essa aplicação é possível gerar um pipeline de CI/CD (Continuous Integration/Continuous Deployment)


<!-- readme-tree start -->


<!-- readme-tree end -->


Observando a árvore temos o código fonte em NodeJs na raiz do repositório.
O arquivo Dockerfile é para ajudar no direcionamento e criação da imagem de container.

O diretório k8s possui detalhes do workflow de CI para que o desenvolvedor possa criar o pipeline utilizando OpenShift Pipelines (TekTon), basta seguir a ordem numérica dos arquivos e já poderá criar o build para as imagens da aplicação.

Os arquivos do pipeline foram desenvolvidos para execução sem nenhuma credencial exposta para melhor uso e proteção das aplicações, bem como das credenciais de um cluster Kubernetes/OpenShift.

O arquivo 00-gitops-token-es.yaml faz referencia a um operador denominado "External Secrets Operator for Red Hat OpenShift", o qual nele foi configurado o vault externo, o qual armazena as credenciais que a aplicação, pipeline e git necessitam para funcionamento automatizado sem exposição de credenciais. Neste repositório é possivel observar a referencia das credenciais apenas ao nome do secret criado no vault e este por sua vez tem a condição de trazer a resposta sem intervenção do usuário e sem armazenar ou trafegar senhas, certificados ou credenciais via rede.

O arquivo 02-update-gitops-task.yaml é responsável pela atualização do repositório de definições e políticas da aplicação. Este arquivo gerará a nova TAG que será utilizada para a aplicação possa ser executada no repositório de dev na nova TAG do build recém gerado.

Como neste diretório, a aplicação deve apenas gerar uma imagem de build, o arquivo 03 pode ser adequado para que o namespace de ci, logo essa RBACs são criadas para dar a permissão de utilizar 

