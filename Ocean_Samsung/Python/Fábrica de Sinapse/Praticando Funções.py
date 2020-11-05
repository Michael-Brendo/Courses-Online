def valor_x(mensagem):
    numero = int(input(mensagem))
    return numero

def calcular_ex1(x):
    return 3 * x - 2

numero01 = valor_x("Digite o valor de x da função:\n")
numero02 = valor_x("Digite o segundo valor de x da função:\n")

func_n01 = calcular_ex1(numero01)
func_n02 = calcular_ex1(numero02)

resultado_ex1 = func_n01 + func_n02

print(f"O resultado de f({numero01}) + f({numero02}) é {resultado_ex1}")