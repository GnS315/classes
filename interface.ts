interface Reader {
    read(url)
}

interface Writer {
    write(data)
}

class File implements Reader, Writer {
    read(url: any) {
        // логика по чтению
    }
    write(data: any) {
        // логика по записи
    }
}