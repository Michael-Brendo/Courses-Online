from datetime import datetime

data1 = datetime.now()

print(f"{data1.day}/{data1.month}/{data1.year} - {data1.hour}:{data1.minute}'{data1.second}")

dia_usuario = int(input("Informe o dia: "))
mes_usuario = int(input("Informe o mês: "))
ano_usuario = int(input("Informe o ano: "))
data2 = datetime(ano_usuario, mes_usuario, dia_usuario)

print(f"{data2.day}/{data2.month}/{data2.year} - Dia da Semana: {data2.weekday()}")

diferenca = data1 - data2

print(f"A diferença entre as datas é de {diferenca.days} dias.")