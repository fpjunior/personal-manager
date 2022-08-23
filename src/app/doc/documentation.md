# Documentation Personal Manager
## _Tela de Despesa_

Informações da tabela:
_Header_
- 1 - CÓDIGO (o codigo deverá seguir esse padráo '0001', '0002', '0003'...)
- 2 - DESCRIÇÃO (descrição da categorias, ex. 'Uber para ir ao trabalho')
- 3 - TIPO (categorias, ex. 'transporte', 'casa', 'entretenimento', 'saúde')
- 4 - VALOR(valor da categorias, ex. R$25,00)
- 5 - FORMA DE PAGAMENTO(ex. 'pix', cartão crédito, cartáo débito, dinheiro, outros )
- 6 - STATUS(se a categorias é futura ou faturada, ex. compra de um relógio no
    cartáo de crédito onde a fatura vence no próximo mês, isso é uma categorias futura)
- 8 - LOCAL (ex. Lojas Tropical/Timbaúba)
- 9 - DATA DESPESA(ex. 23/05/2022 12:20)

_Atributos_
- code: string,
- description: string,
- type: string,
- value: string,
- typePayment: string,
- localEstablishment,
- expenseDate: string,
- status: boolean,
 
_Hint(ToolTip)_
- codigo (Código da categorias.)
- descrição (Descrição da categorias')
- categoria (Categoria)
- valor(Valor da categorias)
- forma pagamento(Forma de pagamento utilizado nessa categorias)
- status(Informação sobre a situação da categorias)
- Local/Estabelecimento (Local/Estabelecimento dessa categorias)
- Data/Hora(data e horário dessa categorias)

# Api Json
sempre que for rodar o ng s, rodar o comando abaixo para startar o servidor a api
json-server --watch db.json

mais informações sobre a api json-server
https://www.fabricadecodigo.com/json-server/


# Editor Online Markdonw
https://dillinger.io/

# Site do GitMoji
https://gitmoji.dev/

# Repositório GitHub 
https://github.com/fpjunior/personal-manager

# Board Trello
https://trello.com/b/CPNewiHz/personal-manager

Site do PrimeNg(Biblioteca de Componentes)
https://www.primefaces.org/primeng/setup
