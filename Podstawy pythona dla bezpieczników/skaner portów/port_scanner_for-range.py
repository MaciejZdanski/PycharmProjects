import socket

for port in range (0, 10):
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