def farenheit():

    f = float(input("Digite a temperatura em graus Farenheit:\n"))
    c = 5 * (f - 12) / 9

    print(f"A temperatura {f:.2f}ºF é equivalente a {c:.2f}ºC")

def celsius():

    c = float(input("Digite a temperatura em graus Celsius:\n"))
    f = (9 * c / 5) + 32

    print(f"A temperatura {c:.2f}ºC é equivalente a {f:.2f}ºF")

temperatura_escolhida = input("Escolha qual temperatura quer converter, C = Celsius e F = Farenheit:\n").upper()

if temperatura_escolhida == "C":
    celsius()
elif temperatura_escolhida == "F":
    farenheit()
else:
    print("Escolha uma temperatura correta.")