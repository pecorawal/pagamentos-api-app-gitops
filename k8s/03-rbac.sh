# Permite que o namespace de deploy de pagamentos leia as imagens do namespace de CI
oc policy add-role-to-group system:image-puller system:serviceaccounts:pagamentos -n pagamentos-api-ci

# Permite que o namespace de deploy do frontend leia as imagens do namespace de CI
oc policy add-role-to-group system:image-puller system:serviceaccounts:checkout -n checkout-frontend-ci
