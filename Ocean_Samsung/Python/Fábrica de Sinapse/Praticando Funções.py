def pedir_imformacao(mensagem):
    numero = input(mensagem)
    return numero

def pedir_numero(mensagem):
    numero = int(input(mensagem))
    return numero

def calcular_ex1(x):
    return 3 * x - 2

def calcula_custos(pecas):
    return custo_fixo + (pecas * custo_variavel)


"""
Escolha de exercicio
"""

escolha_exercicio = pedir_imformacao("Digite o numero do exercicio:\n")
if escolha_exercicio == "1":
    """
    1 - Sendo f(x) = 3x - 2 determine o valor de f(5) + f(0).
    """

    numero01 = pedir_numero("Digite o valor de x da função:\n")
    numero02 = pedir_numero("Digite o segundo valor de x da função:\n")

    func_n01 = calcular_ex1(numero01)
    func_n02 = calcular_ex1(numero02)

    resultado_ex1 = func_n01 + func_n02

    print(f"O resultado de f({numero01}) + f({numero02}) é {resultado_ex1}")

elif escolha_exercicio == "2":

    """
    2 - Na produção de peças, uma fábrica tem um custo fixo de R$ 30,00 mais um custo variável
    de R$ 2,00 por unidade produzida. Sendo x o número de peças unitárias produzidas, determine
    o custo de produção de 100 peças.
    """

    custo_fixo = 30
    custo_variavel = 2

    quantidade_de_pecas = pedir_numero("Digite o número de peças para calcular o custo de produção:\n")

    print(f"O custo da produção de {quantidade_de_pecas} peças é de R$ {calcula_custos(quantidade_de_pecas):.2f}")
