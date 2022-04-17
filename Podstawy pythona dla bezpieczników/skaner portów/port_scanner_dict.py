import socket

def is_port_open (port, ip="8.8.8.8"):
    mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    mysocket.settimeout(1)
    
    adress = (ip, port)
    
    result = mysocket.connect_ex(adress)
    mysocket.close()

    if result == 0:
        print ("port", port, "  jest otwarty")
    else: 
        print ("port", port, " jest zamknięty")

server = {
    1: "closed",
    2: "closed",
    3: "open"
}

server = {}
'''
for port in [53, 80, 443]:

    if is_port_open(port, "8.8.8.8"):
        print ("port", port, " jest otwarty")
    else:
        print("port", port, " jest zamknięty")
'''