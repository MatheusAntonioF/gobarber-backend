# SRP -> Single reponsibility Principle -> Separation of Concerns (Separação de preocupações)

Cada parte do código ou arquivo deve ter apenas uma preocupação, um objetivo

# Dependency Inversion Principle

Passar dependências como parâmetros para outros arquivos(classes ou funções)

# DTO -> Data Transfer Object

Transferência de dados para arquivos separados

# Responsabilidade das rotas

Receber a requisição -> chamar outro arquivo para tratar a requisição -> devolver uma resposta

# DRY -> Don't repeat yourself

Princípio do SOLID sobre não repetir códigos na aplicação(regras de négocio)

# Typeorm

## Método create do repository

Esse método cria somente uma instância da entidade

para salvar no banco de dados -> await <custom_repository>.save(<created_entity>)
