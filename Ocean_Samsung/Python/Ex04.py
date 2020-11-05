numeros_pares = []
numeros_impares = []

for indice in range(5):
  numero_digitado = int(input(f"Digite o {indice + 1}º número:\n "))

  if numero_digitado % 2 == 0:
    numeros_pares.append(numero_digitado)
  else:
    numeros_impares.append(numero_digitado)

print("Os números digitados que são pares:", numeros_pares)
print("Os números digitados que são ímpares:", numeros_impares)