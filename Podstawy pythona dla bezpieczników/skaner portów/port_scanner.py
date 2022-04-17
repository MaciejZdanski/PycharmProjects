import socket

ports = [53, 80, 443, 100]

for port in ports:
    mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    mysocket.settimeout(1)
    
    ip = "8.8.8.8"
    adress = (ip, port)
    
    result = mysocket.connect_ex(adress)

    if result == 0:
        print ("port", port, "  jest otwarty")
    else: 
        print ("port", port, " jest zamknięty")

    mysocket.close()
    







''' Legenda
mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM) - importujemy funkcje socket z biblioteki socket 
                                (socket.socket) i wykorzystujemy parametry - adres iP w wersji 4 oraz prototokuł TCP
mysocket.settimeout(1)          - timeout = 1s, czyli przy nawiązaniu połączenia  ze zdalnym serwerem, czekamy 1s 
                                (jeśli po 1s nie nawiązemy połączenia to uznajemy, że dany port jest zamknięty)
adress = ("8.8.8.8", 443)       - adres - tuple (adres ip jako str, oraz port)
mysocket.connect_ex(adress)     - funkcja connect_ex będzie próbować nawiązać połączenie ze zdalnym serwerem
mysocket.close()                - zamknięcie
'''