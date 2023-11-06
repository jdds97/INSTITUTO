miDiccionario={"Alemania":"Berlin","Francia":"Paris","Reino Unido":"Londres","España":"Madrid","Grecia":"Atenas"}
print(miDiccionario["España"])
print(miDiccionario)
miDiccionario["Italia"]="Lisboa"
print(miDiccionario)
miDiccionario["Italia"]="Roma"
print(miDiccionario)
del miDiccionario["Reino Unido"]

miTupla=["España","Francia","Reino Unido","Alemania"]
miDiccionario2={miTupla[0]:"Madrid",miTupla[1]:"Paris",miTupla[2]:"Londres",miTupla[3]:"Berlin"}
miDiccionario={23   :"Jordan","Nombre":"Michael","Equipo":"Chicago","anillos":{"temporadas":[1991,1992,1993,1996,1997,1998]}}
print(miDiccionario2)
print(miDiccionario["Equipo"])
print(miDiccionario["anillos"])
print(miDiccionario.keys())
print(miDiccionario.values())
print(len(miDiccionario))
print(miDiccionario)
print(miDiccionario2)
