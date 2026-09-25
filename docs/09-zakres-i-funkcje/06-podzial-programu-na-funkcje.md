---
layout: default
title: Podział programu na funkcje
---

# Podział programu na funkcje

## Cel lekcji

Celem lekcji jest nauczenie się dzielenia programu na krótkie funkcje, z których każda ma jedno jasne zadanie.

## Wprowadzenie

Mały program można czasem napisać cały w `main()`. Gdy program rośnie, robi się trudniej. Trudniej go czytać, poprawiać i testować.

Funkcje pomagają uporządkować kod. Każda funkcja powinna robić jedną rzecz i mieć nazwę, która mówi, co ta funkcja robi.

## Proste wyjaśnienie

Program można porównać do pracy w zespole. Jedna osoba wczytuje dane, druga liczy wynik, trzecia pokazuje podsumowanie. W programie rolę takich osób mogą pełnić funkcje.

Dzięki temu `main()` staje się planem działania programu.

## Zestaw krótkich zasad

- Jedna funkcja powinna mieć jedno główne zadanie.
- Nazwa funkcji powinna mówić, co funkcja robi.
- Funkcja, która coś oblicza, zwykle powinna zwracać wynik przez `return`.
- Funkcja, która tylko wypisuje informacje, może mieć typ `void`.
- Nie warto używać zmiennych globalnych, jeśli dane można przekazać parametrami.
- Referencji używamy wtedy, gdy funkcja ma celowo zmienić oryginalną zmienną.

## Program 1 - koszt zakupów podzielony na funkcje

```cpp
#include <iostream>
#include <string>

using namespace std;

double pobierzCeneNetto()
{
    double cenaNetto;
    cout << "Podaj cene netto: ";
    cin >> cenaNetto;
    return cenaNetto;
}

int pobierzLiczbeSztuk()
{
    int liczbaSztuk;
    cout << "Podaj liczbe sztuk: ";
    cin >> liczbaSztuk;
    return liczbaSztuk;
}

double obliczWartoscNetto(double cenaNetto, int liczbaSztuk)
{
    return cenaNetto * liczbaSztuk;
}

double obliczWartoscBrutto(double wartoscNetto)
{
    return wartoscNetto * 1.23;
}

void pokazPodsumowanie(double wartoscNetto, double wartoscBrutto)
{
    cout << "Netto: " << wartoscNetto << "\n";
    cout << "Brutto: " << wartoscBrutto << "\n";
}

int main()
{
    double cenaNetto = pobierzCeneNetto();
    int liczbaSztuk = pobierzLiczbeSztuk();

    double wartoscNetto = obliczWartoscNetto(cenaNetto, liczbaSztuk);
    double wartoscBrutto = obliczWartoscBrutto(wartoscNetto);

    pokazPodsumowanie(wartoscNetto, wartoscBrutto);

    return 0;
}
```

Przykładowe dane wejściowe:

```text
10
3
```

<details markdown="1">
<summary>Pokaż wynik działania</summary>

```text
Podaj cene netto: Podaj liczbe sztuk: Netto: 30
Brutto: 36.9
```

</details>

### Omówienie programu

- `pobierzCeneNetto()` wczytuje cenę netto i zwraca ją do programu,
- `pobierzLiczbeSztuk()` wczytuje liczbę sztuk,
- `obliczWartoscNetto()` wykonuje jedno obliczenie,
- `obliczWartoscBrutto()` dolicza VAT,
- `pokazPodsumowanie()` odpowiada tylko za wypisanie wyniku,
- `main()` pokazuje kolejność działań.

## Program 2 - suma i różnica dwóch liczb

```cpp
#include <iostream>
#include <string>

using namespace std;

int wczytajLiczbe(string komunikat)
{
    int liczba;
    cout << komunikat;
    cin >> liczba;
    return liczba;
}

int obliczSume(int pierwsza, int druga)
{
    return pierwsza + druga;
}

int obliczRoznice(int pierwsza, int druga)
{
    return pierwsza - druga;
}

void pokazWyniki(int suma, int roznica)
{
    cout << "Suma: " << suma << "\n";
    cout << "Roznica: " << roznica << "\n";
}

int main()
{
    int a = wczytajLiczbe("Podaj pierwsza liczbe: ");
    int b = wczytajLiczbe("Podaj druga liczbe: ");

    int suma = obliczSume(a, b);
    int roznica = obliczRoznice(a, b);

    pokazWyniki(suma, roznica);

    return 0;
}
```

Przykładowe dane wejściowe:

```text
8
5
```

<details markdown="1">
<summary>Pokaż wynik działania</summary>

```text
Podaj pierwsza liczbe: Podaj druga liczbe: Suma: 13
Roznica: 3
```

</details>

### Omówienie programu

- `wczytajLiczbe()` można użyć dwa razy z różnymi komunikatami,
- `obliczSume()` zwraca wynik dodawania,
- `obliczRoznice()` zwraca wynik odejmowania,
- `pokazWyniki()` wypisuje gotowe wyniki,
- program jest podzielony na krótkie, czytelne części.

## Kiedy używać kilku funkcji?

Kilka funkcji warto utworzyć wtedy, gdy program ma wyraźne etapy: wczytanie danych, obliczenia i wypisanie wyniku.

Nie trzeba tworzyć osobnej funkcji dla każdej pojedynczej linijki. Funkcja ma pomagać w czytaniu programu, a nie utrudniać go.

## `return` czy referencja?

Jeżeli funkcja oblicza jeden wynik, najczęściej wygodnie jest użyć `return`.

Jeżeli funkcja ma zmienić oryginalną zmienną, można użyć referencji. Nie należy jednak używać referencji bez potrzeby.

## Typowe błędy

- Funkcja robi zbyt wiele rzeczy naraz.
- Nazwa funkcji nie mówi, co funkcja robi.
- Uczeń używa zmiennych globalnych zamiast parametrów.
- Funkcja oblicza wynik, ale go nie zwraca.
- `main()` nadal zawiera cały program, a funkcje są tylko dodatkiem bez sensu.
- Uczeń tworzy zbyt dużo bardzo małych funkcji, przez co kod jest mniej czytelny.
- Uczeń myli wypisywanie wyniku z jego zwracaniem.

## Ćwiczenia

### Ćwiczenie 1

Podziel program obliczający pole prostokąta na funkcje: wczytanie długości, wczytanie szerokości, obliczenie pola i wypisanie wyniku.

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Funkcja obliczająca pole może zwracać `double`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

double wczytajBok(string komunikat)
{
    double bok;
    cout << komunikat;
    cin >> bok;
    return bok;
}

double obliczPole(double dlugosc, double szerokosc)
{
    return dlugosc * szerokosc;
}

void pokazPole(double pole)
{
    cout << "Pole: " << pole << "\n";
}

int main()
{
    double dlugosc = wczytajBok("Podaj dlugosc: ");
    double szerokosc = wczytajBok("Podaj szerokosc: ");

    double pole = obliczPole(dlugosc, szerokosc);

    pokazPole(pole);

    return 0;
}
```

</details>

### Ćwiczenie 2

Podziel program obliczający średnią dwóch ocen na funkcje.

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Możesz utworzyć funkcje `wczytajOcene()`, `obliczSrednia()` i `pokazSrednia()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

double wczytajOcene(string komunikat)
{
    double ocena;
    cout << komunikat;
    cin >> ocena;
    return ocena;
}

double obliczSrednia(double pierwsza, double druga)
{
    return (pierwsza + druga) / 2;
}

void pokazSrednia(double srednia)
{
    cout << "Srednia: " << srednia << "\n";
}

int main()
{
    double pierwsza = wczytajOcene("Podaj pierwsza ocene: ");
    double druga = wczytajOcene("Podaj druga ocene: ");

    double srednia = obliczSrednia(pierwsza, druga);

    pokazSrednia(srednia);

    return 0;
}
```

</details>

### Ćwiczenie 3

Podziel program sprawdzający, która z dwóch liczb jest większa, na funkcje.

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Funkcja może zwracać większą z dwóch liczb.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int wczytajLiczbe(string komunikat)
{
    int liczba;
    cout << komunikat;
    cin >> liczba;
    return liczba;
}

int wiekszaLiczba(int pierwsza, int druga)
{
    if (pierwsza > druga)
    {
        return pierwsza;
    }

    return druga;
}

void pokazWynik(int wynik)
{
    cout << "Wieksza liczba: " << wynik << "\n";
}

int main()
{
    int pierwsza = wczytajLiczbe("Podaj pierwsza liczbe: ");
    int druga = wczytajLiczbe("Podaj druga liczbe: ");

    int wynik = wiekszaLiczba(pierwsza, druga);

    pokazWynik(wynik);

    return 0;
}
```

</details>

## Podsumowanie

Dobry podział programu na funkcje sprawia, że kod jest łatwiejszy do czytania, poprawiania i testowania. Funkcje powinny mieć jasne zadania, czytelne nazwy i pracować na danych przekazywanych przez parametry.