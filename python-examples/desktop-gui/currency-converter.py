from tkinter import *
import requests

eti = []
conversions = []
currenciesArray = ['BRL','USD','JPY','EUR']

root = Tk()
root.title("Conversor de moedas")

myValue = Entry(root, width=30)
myValue.pack()
myValue.insert(0,"0.00")

def checkConnection():
    try:
        requests.get('http://data.fixer.io',timeout=5)
        conLabel = Label(text="API ONLINE",fg="#3CB800")
    except (requests.ConnectionError, requests.Timeout) as exception:
        conLabel = Label(text="Sem internet",fg="#B80800")
    eti.append(conLabel)
    conLabel.pack()

def cleanLabels():
    for item in eti:
        item.destroy()

def packMyLabel(label):
    packedLabel = Label(root, text=label)
    packedLabel.pack()
    eti.append(packedLabel)

def urlMaker(currencies):
    myFixer = 'you-dont-have-a-fixer?'
    url = 'http://data.fixer.io/api/latest?access_key=' + myFixer + '&base=EUR&symbols='
    for item in currencies:
        url += item + ','        
    return url[:-1]

def calculateEUR() :
    myurl = urlMaker(currenciesArray)
    try:
        convRes = requests.get(myurl)
        convRes.json()
        valorBRL = float(myValue.get())
        valorEUR = valorBRL / convRes.json()['rates']['BRL']
        for item in currenciesArray:
            conversions.append(item+' -> '+str(convRes.json()['rates'][item]*valorEUR))
    
        fu = cleanLabels()
        for item in conversions:
            fu = packMyLabel(item)
        conversions.clear()
        fu = checkConnection()
    except (requests.ConnectionError, requests.Timeout) as exception:
        print("Erro de internet, impossível calcular...")
        fu = cleanLabels()
        fu = checkConnection()

targetCurrency = Button(root, text="Converter", command=calculateEUR)
targetCurrency.pack()
fu = cleanLabels()
for item in currenciesArray:
    fu = packMyLabel(item + ' -> ')

fu = checkConnection()

root.mainloop()