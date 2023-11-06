# Condicionales
'''
# 1
num1 = int(input("Introduce el primer número "))
num2 = int(input("Introduce el segundo número "))
resultado = "El numero mayor es "


def DevuelveMax(num1, num2):
    if num1 <= num2:
        resultado = num1
    else:
        resultado = num2

    return resultado


print("El numero mayor entre "+str(num1)+" y " +
      str(num2)+" es "+str(DevuelveMax(num1, num2)))
# 2
nombre = input("Introduce el nombre ")
direccion = input("Introduce la dirección ")
tlfno = input("Introduce el teléfono ")
yo = [nombre, direccion, tlfno]
print(yo)


# 3
num1 = int(input("Introduce el primer número "))
num2 = int(input("Introduce el segundo número "))
num3 = int(input("Introduce el tercer número "))


def media(num1, num2, num3):
    return (num1+num2+num3)/3


print(media(num1, num2, num3))
'''

lista=["SEVILLA","BETIS"]
opcion=input("Escribe la asignatura escogida : ")

print(opcion)


if opcion in lista:
    print("Esta")
else:
    print("No esta")
