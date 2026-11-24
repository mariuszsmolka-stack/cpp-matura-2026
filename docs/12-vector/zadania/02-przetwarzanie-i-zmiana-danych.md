---
layout: default
title: "Zadania z vector - przetwarzanie i zmiana danych"
---

# Przetwarzanie i zmiana danych

W tym zestawie decydujesz, czy zmienić istniejący kontener, czy zbudować nowy. Ostatnie zadanie łączy operacje na `vector` w program sterowany poleceniami.

[Wróć do zbioru zadań]({{ '/12-vector/zadania/' | relative_url }})

Zakładamy poprawne wejście zgodne z ograniczeniami. Indeksy zaczynają się od `0`. Listy wypisuj w jednym wierszu, oddzielając elementy spacjami. Dodatkowa spacja na końcu wiersza nie zmienia wyniku. Używaj C++23.

## Zadanie 6 - Przesunięcie cykliczne

Zmieniasz początek listy dyżurów. Ostatnia osoba ma trafić na początek, a pozostałe przesuwają się o jedno miejsce w prawo. Wykonaj takie przesunięcie w istniejącym `vector`, bez tworzenia drugiego kontenera. Nie używaj `rotate()`.

### Dane wejściowe

- Liczba elementów `n`, od `0` do `10000`.
- Dalej `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Jeden wiersz z wartościami po przesunięciu. Dla pustego kontenera wypisz `PUSTY`.

### Przykład wejścia

```text
4
5 8 2 9
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 6</summary>

```text
9 5 8 2
```

Wartość `9` wraca na początek. Każda z pozostałych zajmuje następne miejsce.

</details>

### Kiedy tego użyć?

Do zmiany początku cyklicznego harmonogramu bez usuwania żadnego elementu.

### Kiedy wybrać coś innego?

Gdy oryginalny układ ma zostać zachowany, utwórz osobny wynik. Tutaj ćwiczysz zmianę tego samego kontenera.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 6</summary>

Najpierw ocal element, który ma wrócić na początek. W którą stronę trzeba przejść po indeksach, aby nie skopiować wielokrotnie tej samej wartości? Dla pustej listy nie ma czego zapamiętywać.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 6</summary>

Funkcja dostaje referencję, bo zmienia oryginał. Kopiowanie od końca zachowuje wartości jeszcze potrzebne w następnych krokach.

```cpp
#include <iostream>
#include <vector>

using namespace std;

void przesunWPrawo(vector<int> &liczby)
{
    if (liczby.empty())
    {
        return;
    }
    int liczbaElementow = liczby.size();
    int ostatnia = liczby[liczbaElementow - 1];
    for (int indeks = liczbaElementow - 1; indeks > 0; indeks--)
    {
        liczby[indeks] = liczby[indeks - 1];
    }
    liczby[0] = ostatnia;
}

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> liczby[indeks];
    }
    przesunWPrawo(liczby);

    if (liczby.empty())
    {
        cout << "PUSTY";
    }
    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowy błąd:** przesuwanie od początku nadpisuje wartości przed ich wykorzystaniem.

</details>

## Zadanie 7 - Stabilne usuwanie wartości

W rejestrze pojawił się błędny odczyt o znanej wartości. Usuń wszystkie jego wystąpienia. Zbuduj wynikowy `vector`, zachowując kolejność pozostałych elementów. Kontener źródłowy ma pozostać bez zmian.

„Stabilne” oznacza tutaj, że żadne dwa pozostawione elementy nie zamieniają się kolejnością. Wartość usuwana może występować kilka razy pod rząd.

### Dane wejściowe

- `n`, czyli liczba elementów od `0` do `10000`.
- Następnie `n` liczb całkowitych.
- Na końcu jedna liczba: wartość usuwana.
- Wszystkie wartości należą do zakresu od `-1000000` do `1000000`.

### Wynik

Lista po usunięciu wskazanej wartości. Jeśli nic nie zostało, wypisz `PUSTY`.

### Przykład wejścia

```text
7
3 2 2 5 2 3 8
2
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 7</summary>

```text
3 5 3 8
```

Usunięte zostały wszystkie trzy wartości `2`. Obie wartości `3` zachowały swoje miejsce względem `5` i `8`.

</details>

### Kiedy tego użyć?

Gdy odrzucasz jeden wskazany rodzaj danych, ale musisz zachować kolejność zapisów.

### Kiedy wybrać coś innego?

Jeżeli usuwasz element z jednej znanej pozycji, wystarczy `erase()`. Tutaj warunek dotyczy wartości i może pasować do wielu miejsc.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 7</summary>

Nie musisz usuwać niczego z przeglądanej listy. O każdym elemencie zdecyduj, czy zasługuje na miejsce w nowej. Co zrobi taka metoda z dwoma sąsiednimi błędnymi odczytami?

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 7</summary>

Funkcja tworzy osobny kontener. Każdy element źródła oglądamy raz w kolejności wejścia, również gdy poprzedni został odrzucony.

```cpp
#include <iostream>
#include <vector>

using namespace std;

vector<int> bezWartosci(const vector<int> &liczby, int usuwana)
{
    vector<int> wynik;
    for (int liczba : liczby)
    {
        if (liczba != usuwana)
        {
            wynik.push_back(liczba);
        }
    }
    return wynik;
}

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> liczby[indeks];
    }
    int usuwana;
    cin >> usuwana;
    vector<int> wynik = bezWartosci(liczby, usuwana);

    if (wynik.empty())
    {
        cout << "PUSTY";
    }
    for (int liczba : wynik)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowy błąd:** usunięcie elementu przez `erase()` i od razu zwiększenie indeksu pomija element, który przesunął się na zwolnione miejsce.

</details>

## Zadanie 8 - Dodawanie znacznika alarmu

Ujemny odczyt w dzienniku wymaga znacznika alarmu. Po każdej wartości ujemnej dopisz `0`. Zachowaj również wszystkie oryginalne wartości, w tym zera. Wynik zbuduj w osobnym `vector`.

Nie dopisuj elementów do kontenera, po którym właśnie przechodzisz.

### Dane wejściowe

- Liczba odczytów `n`, od `0` do `10000`.
- `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Jeden wiersz z rozszerzonym dziennikiem. Dla braku odczytów wypisz `PUSTY`.

### Przykład wejścia

```text
4
5 -2 8 -1
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 8</summary>

```text
5 -2 0 8 -1 0
```

Dwa ujemne odczyty otrzymały po jednym dodatkowym zerze. Długość wzrosła z czterech do sześciu elementów.

</details>

### Kiedy tego użyć?

Gdy jeden zapis wejściowy może dać więcej niż jeden zapis wyjściowy, na przykład pomiar i dodatkowy znacznik.

### Kiedy wybrać coś innego?

Jeśli chcesz zastąpić liczbę ujemną zerem, wystarczy zmienić istniejący element. Tutaj zachowujesz liczbę i dodajesz nowe miejsce.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 8</summary>

Każdy odczyt musi trafić do wyniku. Tylko dla części odczytów potrzebny jest jeszcze drugi zapis. Rozważ wejście zawierające liczbę ujemną, a bezpośrednio po niej oryginalne zero: ile zer powinno zostać w wyniku?

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 8</summary>

Najpierw kopiujemy odczyt. Potem ewentualnie dopisujemy alarm. Pętla przegląda wyłącznie oryginał, więc nigdy nie zaczyna analizować nowo dodanych znaczników.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> odczyty(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> odczyty[indeks];
    }

    vector<int> dziennik;
    for (int odczyt : odczyty)
    {
        dziennik.push_back(odczyt);
        if (odczyt < 0)
        {
            dziennik.push_back(0);
        }
    }
    if (dziennik.empty())
    {
        cout << "PUSTY";
    }
    for (int zapis : dziennik)
    {
        cout << zapis << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowe błędy:** zastąpienie ujemnej wartości zerem oraz potraktowanie istniejącego zera jako już dodanego alarmu.

</details>

## Zadanie 9 - Plan i wykonanie

Porównujesz plan z rzeczywistymi wynikami dla tych samych kolejnych dni. Wczytaj oba wektory i utwórz trzeci. Pod każdym indeksem zapisz `wykonanie - plan`.

Znajdź indeks największego odchylenia bez względu na znak. Spadek o `8` jest większym odchyleniem niż wzrost o `5`. Przy remisie wybierz najmniejszy indeks. Nie używaj gotowych algorytmów wyszukiwania.

### Dane wejściowe

- Wspólna długość `n`, od `1` do `10000`.
- Drugi wiersz: `n` wartości planowanych.
- Trzeci wiersz: `n` wartości rzeczywistych.
- Wartości są całkowite, od `-1000000` do `1000000`.

### Wynik

- Pierwszy wiersz: wszystkie różnice, z zachowaniem znaków.
- Drugi wiersz: indeks największego odchylenia.

### Przykład wejścia

```text
4
10 20 30 40
13 12 35 48
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 9</summary>

```text
3 -8 5 8
1
```

Odchylenia o indeksach `1` i `3` mają taką samą wielkość `8`. Wybieramy wcześniejszy indeks `1`.

</details>

### Kiedy tego użyć?

Do porównywania odpowiadających sobie pomiarów, budżetów lub wyników z dwóch zestawień.

### Kiedy wybrać coś innego?

Jeśli rekordy są zapisane w różnej kolejności, wspólny indeks nie gwarantuje, że opisują ten sam dzień. Najpierw trzeba ustalić ich zgodność.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 9</summary>

Wszystkie trzy kontenery opisują ten sam zestaw dni. Wielkość odchylenia możesz uzyskać, zmieniając znak tylko ujemnej różnicy. Samej różnicy w wynikowym kontenerze nie zmieniaj. Jaki rodzaj porównania pozwoli zachować pierwszy wynik przy remisie?

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 9</summary>

Osobno przechowujemy różnice i wielkość najlepszego odchylenia. Zmiana lidera zachodzi tylko przy wyniku ściśle większym. Wszystkie różnice mieszczą się w `int` przy podanych ograniczeniach.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int wielkoscOdchylenia(int roznica)
{
    if (roznica < 0)
    {
        return -roznica;
    }
    return roznica;
}

int main()
{
    int liczbaDni;
    cin >> liczbaDni;
    vector<int> plan(liczbaDni);
    vector<int> wykonanie(liczbaDni);
    vector<int> roznice(liczbaDni);
    for (int indeks = 0; indeks < liczbaDni; indeks++)
    {
        cin >> plan[indeks];
    }
    for (int indeks = 0; indeks < liczbaDni; indeks++)
    {
        cin >> wykonanie[indeks];
        roznice[indeks] = wykonanie[indeks] - plan[indeks];
    }

    int najlepszyIndeks = 0;
    int najwiekszeOdchylenie = wielkoscOdchylenia(roznice[0]);
    for (int indeks = 1; indeks < liczbaDni; indeks++)
    {
        int odchylenie = wielkoscOdchylenia(roznice[indeks]);
        if (odchylenie > najwiekszeOdchylenie)
        {
            najwiekszeOdchylenie = odchylenie;
            najlepszyIndeks = indeks;
        }
    }
    for (int roznica : roznice)
    {
        cout << roznica << " ";
    }
    cout << "\n" << najlepszyIndeks << "\n";
    return 0;
}
```

**Typowy błąd:** porównywanie podpisanych różnic uzna `5` za większe od `-8`, choć wielkość drugiego odchylenia wynosi `8`.

</details>

## Zadanie 10 - Kolejka zgłoszeń

Punkt pomocy zapisuje krótkie nazwy zgłoszeń. Napisz program obsługujący poniższe polecenia. Dane przechowuj w `vector<string>`.

- `DODAJ nazwa` => dopisz zgłoszenie na końcu.
- `PILNE nazwa` => wstaw zgłoszenie na początku. Nowe pilne zgłoszenie trafia przed wcześniejsze pilne.
- `OBSLUZ` => wypisz `Obsluzono: nazwa` i usuń pierwsze zgłoszenie. Dla pustej kolejki wypisz `PUSTA`.
- `POKAZ` => wypisz wszystkie nazwy w kolejności obsługi albo `PUSTA`.
- `KONIEC` => zakończ program bez dodatkowego komunikatu.

Powtarzające się nazwy są osobnymi zgłoszeniami. Nie używaj `queue`, `deque`, `list`, `set` ani `map`.

### Dane wejściowe

Od `1` do `2000` poleceń, każde w osobnym wierszu. Ostatnie to `KONIEC`. Nazwa ma od `1` do `30` znaków: liter alfabetu łacińskiego bez polskich znaków, cyfr lub podkreśleń. Nie zawiera spacji. Wszystkie polecenia są poprawne.

### Wynik

Po jednym wierszu dla każdego `OBSLUZ` i `POKAZ`, zgodnie z opisem. Dodawanie zgłoszeń niczego nie wypisuje.

### Przykład wejścia

```text
DODAJ drukarka
DODAJ konto
PILNE siec
POKAZ
OBSLUZ
POKAZ
KONIEC
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 10</summary>

```text
siec drukarka konto
Obsluzono: siec
drukarka konto
```

Pilna awaria sieci wyprzedza oba wcześniejsze zgłoszenia. Po jej obsłużeniu na początku pozostaje drukarka.

</details>

### Kiedy tego użyć?

Do przećwiczenia małego systemu, którego stan zmienia się po kolejnych poleceniach.

### Kiedy wybrać coś innego?

Przy bardzo dużej liczbie operacji na początku listy warto później poznać inny kontener. `vector` musi wtedy przesuwać pozostałe zgłoszenia. W tym zadaniu liczba poleceń jest mała.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 10</summary>

Oddziel odczyt polecenia od odczytu nazwy. Nie każde polecenie ma drugi wyraz. Zanim odczytasz albo usuniesz pierwszy element, sprawdź pustą kolejkę. Po usunięciu pierwszego kolejne zgłoszenie samo zajmuje jego miejsce.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 10</summary>

Pętla pobiera polecenia aż do `KONIEC`. Tylko dwie gałęzie potrzebują nazwy. Wstawienie i usunięcie początku korzysta z poznanych wcześniej `insert()` i `erase()`.

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main()
{
    vector<string> zgloszenia;
    string polecenie;
    while (cin >> polecenie)
    {
        if (polecenie == "KONIEC")
        {
            break;
        }
        if (polecenie == "DODAJ" || polecenie == "PILNE")
        {
            string nazwa;
            cin >> nazwa;
            if (polecenie == "DODAJ")
            {
                zgloszenia.push_back(nazwa);
            }
            else
            {
                zgloszenia.insert(zgloszenia.begin(), nazwa);
            }
        }
        else if (polecenie == "OBSLUZ")
        {
            if (zgloszenia.empty())
            {
                cout << "PUSTA\n";
            }
            else
            {
                cout << "Obsluzono: " << zgloszenia.front() << "\n";
                zgloszenia.erase(zgloszenia.begin());
            }
        }
        else if (polecenie == "POKAZ")
        {
            if (zgloszenia.empty())
            {
                cout << "PUSTA";
            }
            for (const string &nazwa : zgloszenia)
            {
                cout << nazwa << " ";
            }
            cout << "\n";
        }
    }
    return 0;
}
```

**Typowe błędy:** czytanie nazwy po `POKAZ`, usuwanie z pustej kolejki oraz usuwanie ostatniego zgłoszenia zamiast pierwszego.

</details>

## Praca z debuggerem

Uruchom rozwiązanie zadania 6 dla jego przykładu. Zatrzymaj program na przypisaniu wewnątrz pętli przesuwającej. Obserwuj `indeks`, `ostatnia` i cały `vector`. Sprawdź, dlaczego chwilowo pojawiają się dwie takie same liczby.

<details markdown="1">
<summary>Pokaż wskazówkę do pracy z debuggerem</summary>

Kopiowanie nie usuwa wartości źródłowej. Zwróć uwagę, czy źródło następnego kroku pozostało nienaruszone.

</details>

<details markdown="1">
<summary>Pokaż omówienie pracy z debuggerem</summary>

Zmiany w pętli to kolejno `5 8 2 2`, `5 8 8 2` i `5 5 8 2`. Zapamiętana wartość `9` czeka poza kontenerem. Ostatnie przypisanie daje `9 5 8 2`. Pełny kod jest w rozwiązaniu zadania 6. Powtórzenia po drodze są oczekiwane, ponieważ wykonujesz kopiowanie.

</details>

[Przejdź do zadań z plikami danych]({{ '/12-vector/zadania/03-zadania-z-plikami-danych.html' | relative_url }})
