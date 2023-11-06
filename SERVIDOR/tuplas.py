lista="Sevilla","Cadiz","Malaga","Huelva"
#Tupla
tuplaJuan=("Juan",13,1,1995)
print(tuplaJuan)
print(tuplaJuan[3])
#Convertir tupla en lista
listaJuan=list(tuplaJuan)
print(listaJuan)
#Convertir lista en tupla
tuplaJuan=tuple(listaJuan)
print(tuplaJuan)
print(tuplaJuan.count(13))
#Desempaquetado de tuplas
nombre,dia,mes,agno=tuplaJuan
print(nombre)
print(dia)
print(mes)
print(agno)
