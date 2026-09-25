# Struktury i funkcje

## Cel lekcji

Nauczysz się przekazywać struktury do funkcji, zmieniać je przez referencję i zwracać gotową strukturę z funkcji.

## Krótkie wprowadzenie do problemu

Gdy program rośnie, nie chcemy trzymać wszystkiego w `main()`. Dane ucznia można wczytać w jednej funkcji, wypisać w drugiej, a zmienić w trzeciej.

Struktura zachowuje się podobnie jak inne typy danych, ale zawiera kilka pól.

## Wyjaśnienie idei

Funkcja może dostać strukturę na trzy proste sposoby:

```cpp
void wypisz(Uczen uczen)
```

Funkcja dostaje kopię. Zmiany nie wpływają na oryginał.

```cpp
void zmienPunkty(Uczen &uczen, int nowePunkty)
```

Funkcja dostaje dostęp do oryginału. Może zmienić przekazaną strukturę.

```cpp
void wypisz(const Uczen &uczen)
```

Funkcja czyta oryginał bez kopiowania, ale nie może go zmienić.

## Składnia

```cpp
struct Uczen
{
    string imie;
    string nazwisko;
    int punkty;
};

void wypisz(const Uczen &uczen)
{
    cout << uczen.imie << " " << uczen.nazwisko << "\n";
}
```

`const Uczen &uczen` jest dobrym wyborem do wypisywania i odczytu. Funkcja nie tworzy kopii i nie może przypadkowo zmienić rekordu.

## Przykład 1 - funkcje do wczytania i wypisania rekordu

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Uczen
{
    string imie;
    string nazwisko;
    int punkty;
};

Uczen utworzUcznia()
{
    Uczen uczen;

    cin >> uczen.imie >> uczen.nazwisko >> uczen.punkty;

    return uczen;
}

void wypisz(const Uczen &uczen)
{
    cout << uczen.imie << " " << uczen.nazwisko;
    cout << " - " << uczen.punkty << " pkt\n";
}

int main()
{
    Uczen osoba = utworzUcznia();

    wypisz(osoba);

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
Anna Nowak 78
```

Wynik:

```text
Anna Nowak - 78 pkt
```

</details>

## Omówienie przykładu krok po kroku

1. `struct Uczen` opisuje rekord ucznia.
2. `utworzUcznia()` tworzy lokalną zmienną `uczen`.
3. Funkcja wczytuje pola tej zmiennej.
4. `return uczen;` zwraca gotowy rekord.
5. W `main()` wynik funkcji trafia do zmiennej `osoba`.
6. `wypisz(osoba);` przekazuje rekord do funkcji wypisującej.
7. `const Uczen &uczen` oznacza odczyt bez zmiany rekordu.

## Przykład 2 - zmiana struktury przez referencję

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Uczen
{
    string imie;
    string nazwisko;
    int punkty;
};

void zmienPunkty(Uczen &uczen, int nowePunkty)
{
    uczen.punkty = nowePunkty;
}

void wypisz(const Uczen &uczen)
{
    cout << uczen.imie << " " << uczen.nazwisko;
    cout << " - " << uczen.punkty << " pkt\n";
}

int main()
{
    Uczen osoba = {"Anna", "Nowak", 78};

    wypisz(osoba);
    zmienPunkty(osoba, 90);
    wypisz(osoba);

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Anna Nowak - 78 pkt
Anna Nowak - 90 pkt
```

</details>

`Uczen &uczen` pozwala zmienić oryginalną zmienną. Bez znaku `&` funkcja dostałaby kopię.

## Przykład 3 - kopia nie zmienia oryginału

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Uczen
{
    string imie;
    string nazwisko;
    int punkty;
};

void zmienKopie(Uczen uczen)
{
    uczen.punkty = 0;
}

int main()
{
    Uczen osoba = {"Jan", "Kowalski", 64};

    zmienKopie(osoba);

    cout << osoba.punkty << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
64
```

</details>

Funkcja zmieniła tylko swoją kopię. Oryginał w `main()` pozostał bez zmian.

## Struktura a tablica

Strukturę można zwrócić przez wartość:

```cpp
Uczen utworzUcznia()
```

Zwykłej wbudowanej tablicy nie można zwrócić przez wartość w taki sam sposób. Dlatego w rozdziale o tablicach przekazywaliśmy tablicę do funkcji razem z jej rozmiarem.

## Kiedy tego użyć?

Użyj funkcji, gdy jeden fragment programu ma czytelne zadanie: wczytanie rekordu, wypisanie rekordu, zmiana punktów albo obliczenie wyniku na podstawie pól.

## Kiedy wybrać coś innego?

Jeżeli program ma tylko kilka prostych instrukcji, funkcje mogą nie być jeszcze potrzebne. Jeżeli funkcja ma zwrócić dwie krótkie wartości, można rozważyć `pair`. Gdy dane mają nazwy i trwałe znaczenie, zwykle lepszy pozostaje `struct`.

## Typowe błędy

- Przekazanie struktury przez wartość, gdy funkcja miała zmienić oryginał.
- Brak `const` przy funkcji, która tylko czyta dane.
- Próba zmiany pola w parametrze `const Uczen &`.
- Zapomnienie o `return` w funkcji zwracającej strukturę.
- Mylenie struktury z tablicą i oczekiwanie, że działa tak samo przy zwracaniu z funkcji.

## Ćwiczenia

### Ćwiczenie 1

Napisz strukturę `Produkt` i funkcję `wypisz`, która wypisuje produkt przekazany przez `const` reference.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Nagłówek funkcji może wyglądać tak: `void wypisz(const Produkt &produkt)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Produkt
{
    string nazwa;
    double cena;
};

void wypisz(const Produkt &produkt)
{
    cout << produkt.nazwa << " - " << produkt.cena << " zl\n";
}

int main()
{
    Produkt produkt = {"zeszyt", 4.50};

    wypisz(produkt);

    return 0;
}
```

</details>

### Ćwiczenie 2

Napisz funkcję, która zwiększa liczbę punktów ucznia o podaną wartość.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Funkcja musi dostać ucznia przez referencję, czyli `Uczen &uczen`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Uczen
{
    string imie;
    int punkty;
};

void dodajPunkty(Uczen &uczen, int dodatkowePunkty)
{
    uczen.punkty += dodatkowePunkty;
}

int main()
{
    Uczen osoba = {"Anna", 70};

    dodajPunkty(osoba, 8);

    cout << osoba.imie << ": " << osoba.punkty << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Napisz funkcję `utworzProdukt`, która wczytuje nazwę i cenę produktu, a następnie zwraca gotową strukturę.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Funkcja może utworzyć lokalną zmienną `Produkt produkt;`, wczytać jej pola i wykonać `return produkt;`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

struct Produkt
{
    string nazwa;
    double cena;
};

Produkt utworzProdukt()
{
    Produkt produkt;

    cin >> produkt.nazwa >> produkt.cena;

    return produkt;
}

int main()
{
    Produkt produkt = utworzProdukt();

    cout << produkt.nazwa << " " << produkt.cena << "\n";

    return 0;
}
```

</details>

## Podsumowanie

Struktury można przekazywać do funkcji jak inne typy. Warto rozumieć różnicę między kopią, referencją i `const` reference, bo od tego zależy, czy funkcja może zmienić oryginalny rekord.
