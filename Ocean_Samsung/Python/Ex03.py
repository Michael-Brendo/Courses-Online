def jogar():

    escolha = input("Você prefere uma historia mais medieval ou futurista?:\n").strip().lower()

    if escolha == "medieval":
        print("Você recebeu uma espada")

    elif escolha == "futurista":
        print("Vocé recebeu um sabre de luz")

    else:
        print("Tente novamente")
        jogar()

jogar()