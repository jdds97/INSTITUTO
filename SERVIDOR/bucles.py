'''
alumnos = ["Manuel", "Pepe", "Juan"]
for alumno in alumnos:
    print(alumno)

EMAIL = False
for i in "jesusdediossanchez@gmail.com":
    if (i == "@"):
        EMAIL = True
if (EMAIL == True):
    print("El email es correcto")
else:
    print("El email es incorrecto")


for i in range(5):
    print(f"Valor de la variable {i}")
# Bucles de dos en dos desde 0 hacia 9 ,siendo 10 posiciones
for i in range(0, 10, 2):
    print(f"Valor de i {i}")
LISTA = ""
VALIDO = False
EMAIL2 = input("Introduce tu email ")

for i in range(len(EMAIL2)):
    if EMAIL2[i] == "@":
        VALIDO = True
if VALIDO:
    print("Email correcto")
else:
    print("Email incorrecto")

# Ejercicio 1:
# • Crea un programa que muestre los números impares del 1 al 100. Los números deberán
# aparecer una al lado del otro sin salto de línea
impares = ""
for i in range(1, 100, 3):
    impares += str(i)+","
print(str(impares))
# Ejercicio 2:
# • Crea un programa que pida por teclado introducir una contraseña. La contraseña no
# podrá tener menos de 8 caracteres ni espacios en blanco. Si la contraseña es correcta,
# el programa imprime “Contraseña OK”. En caso contrario imprime “Contraseña
# errónea”
contraseña = input("Introduce una contraseña válida : ")
conEncontrado = False
for i in range(len(contraseña)):
    if i != "" and len(contraseña) >= 8:
        conEncontrado = True

if conEncontrado:
    print("Contraseña correcta")
else:
    print("Contraseña incorrecta")
# Ejercicio 3:
# • Crea un programa que evalúe si una dirección de correo electrónico es válida o no en
# función de si tiene “@” o “.” Hay que tener en cuenta que la dirección se considera
# correcta si solo tiene una “@” y si tiene uno o más “.”
EMAIL3 = input("Indica una direccion de correo valida : ")
ENCONTRADO = False
ENCONTRADO2 = False

for i in EMAIL3:
    if i == "@":
        ENCONTRADO = True
    elif i == ".":
        ENCONTRADO2 = True


if ENCONTRADO and ENCONTRADO2:
    print(str(EMAIL3) + " Correo correcto")
else:
    print(str(EMAIL3) + " Correo incorrecto")
# Ejercicio 4:
# rea un programa que pida números infinitamente. Los números introducidos deben
# ser cada vez mayores El programa finalizará cuando se introduce un número menor que
# el anterior.
salir = False
while salir == False:
    numero = int(input("Dime un número"))
    numeroAnt = 0
    if numero < numeroAnt:
        salir = True

    numeroAnt = numero
'''
# Ejercicio 5:Crea un programa que pida números positivos indefinidamente. El programa termina 
#cuando se introduce un número negativo. Finalmente el programa muestras la suma de 
#todos los números introducidos
numPos=0
sumNum=0
while numPos>=0:
    numPos=int(input("Introduce un número"))
    sumNum+=numPos
print(str(sumNum))
