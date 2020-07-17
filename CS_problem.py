for i in range(1, 5):
    row = []
    num = int((i**3 + 11 * i - 6) / 6)
    for j in range(i):
        row.append(num + j * 2)
    string = ''
    for integer in row:
        string += str(integer) + ' '
    print(string)
    