#Arrays
lista=["Maria","Pepe","Marta","Antonio"]
#Acceder a una porcion de la lista
#Se imprime el 0,1,2 y el 3 se excluye
print(lista[0:3])
#Constructor string añadido y agrega el elemento al final de la lista
lista.append("Sandra")
print(lista)
#Insertar en un indice especifico
lista.insert(2,"Sandra")
print(lista)
#Eliminar un elemento de la lista
lista.remove("Sandra")
print(lista)
#Eliminar el ultimo elemento de la lista
lista.pop()
print(lista)
#Eliminar un elemento de la lista por indice
del lista[0]
print(lista)
#Extender una lista
lista.extend(["Sandra","Ana"])
print(lista)
#Contar elementos de la lista
print(len(lista))
#Buscar un elemento en la lista
print("Pepe" in lista)
#Devuelve el indice del elemento
print(lista.index("Pepe"))
#Devuelve cuantas veces se repite un elemento
print(lista.count("Pepe"))
#Concatenar listas
lista2=["Juan","Ana"]
lista3=lista+lista2
