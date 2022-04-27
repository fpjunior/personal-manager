# Documentation Personal Manager
## _Tela de Despesa_

Informações da tabela:
_Header_
- 1 - CÓDIGO (o codigo deverá seguir esse padráo '0001', '0002', '0003'...)
- 2 - DESCRIÇÃO (descrição da despesa, ex. 'Uber para ir ao trabalho')
- 3 - TIPO (tipo da despesa, ex. 'transporte', 'casa', 'entretenimento', 'saúde')
- 4 - VALOR(valor da despesa, ex. R$25,00)
- 5 - FORMA DE PAGAMENTO(ex. 'pix', cartão crédito, cartáo débito, dinheiro, outros )
- 6 - STATUS(se a despesa é futura ou faturada, ex. compra de um relógio no
    cartáo de crédito onde a fatura vence no próximo mês, isso é uma despesa futura)
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
- codigo (Código da despesa.)
- descrição (Descrição da despesa')
- tipo (Tipo da despesa)
- valor(Valor da despesa)
- forma pagamento(Forma de pagamento utilizado nessa despesa)
- status(Informação sobre a situação da despesa)
- Local/Estabelecimento (Local/Estabelecimento dessa despesa)
- Data/Hora(data e horário dessa despesa)

# Api Json
sempre que for rodar o ng s, rodar o comando abaixo para startar o servidor a api
json-server --watch db.json

mais informações sobre a api json-server
https://www.fabricadecodigo.com/json-server/
