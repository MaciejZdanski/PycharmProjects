import socket

port = {
    "number" : 53,
    "ip" : "8.8.8.8",
    "status" : "open" }

class Port: 
    def __init__ (self, ip, port_number):
        self.ip = ip
        self.port_number = port_number
    
    def check_port(self):
        mysocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        mysocket.settimeout(1)

        address = (self.ip, self.port_number)
        result = mysocket.connect_ex(address)
        mysocket.close()

        if result == 0:
            self.open = True
        else: 
            self.open = False


ip = "8.8.8.8"
port_number = 53
port = Port (ip, port_number)

port.check_port()
print(port.port_number, port.open)