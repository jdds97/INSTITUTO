#Variables y condicionales
print("Hola alumnos")
mi_nombre=input("Cual es tu nombre? ")
print("Hola", mi_nombre)
if mi_nombre == "Jesus":
    print("Hola", mi_nombre)
else:
    print("No es tu nombre")
nota_alumno=int(input("Introduce la nota del alumno: "))
def evaluacion(nota):
    valoracion="aprobado"
    if nota<5:
        valoracion="suspenso"
    return valoracion
print(evaluacion(int(nota_alumno)))
edad=int(input("Introduce tu edad: "))
if edad<18:
    print("No puedes pasar")
elif edad>100:
    print("Edad incorrecta")
else:
    print("Puedes pasar")
