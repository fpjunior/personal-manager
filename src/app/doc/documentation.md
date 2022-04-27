#Tela de Despesas
- Nome das coluna da tabela 
1 - codigo (o codigo deverá seguir esse padráo '0001', '0002', '0003'...)
2 - descrição (descrição da despesa, ex. 'Uber para ir ao trabalho')
3 - tipo (tipo da despesa, ex. 'transporte', 'casa', 'entretenimento', 'saúde')
4 - valor(valor da despesa, ex. R$25,00)
5 - forma pagamento(ex. 'pix', cartão crédito, cartáo débito, dinheiro, outros )
6 - status(se a despesa é futura ou faturada, ex. compra de um relógio no
    cartáo de crédito onde a fatura vence no próximo mês, isso é uma despesa futura)
8 - Local/Estabelecimento (ex. Lojas Tropical/Timbaúba)
9 - Data/Hora(ex. 23/05/2022 12:20)

- tipo dos dados (atributos)
code: string,
description: string,
type: string,
value: string,
typePayment: string,
localEstablishment,
expenseDate: string,
status: boolean,

- Hint(ToolTip)
1 - codigo (Código da despesa.)
2 - descrição (Descrição da despesa')
3 - tipo (Tipo da despesa)
4 - valor(Valor da despesa)
5 - forma pagamento(Forma de pagamento utilizado nessa despesa)
6 - status(Informação sobre a situação da despesa)
8 - Local/Estabelecimento (Local/Estabelecimento dessa despesa)
9 - Data/Hora(data e horário dessa despesa)

#Api Json
sempre que for rodar o ng s, rodar o comando abaixo para startar o servidor a api
json-server --watch db.json

mais informações sobre a api json-server
https://www.fabricadecodigo.com/json-server/
