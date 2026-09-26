# `vector` struktur

## Krótkie wprowadzenie do problemu

Rozdział 11 pokazał struktury, a wcześniejsze lekcje pokazały `vector`. Teraz połączymy te dwa pomysły: zmienna liczba rekordów.

## Proste wyjaśnienie idei

`vector<Uczen>` to lista rekordów typu `Uczen`. Każdy element ma pola, na przykład `imie` i `punkty`.

## Składnia

```cpp
vector<Uczen> uczniowie;
uczniowie.push_back({"Anna", 78});
cout << uczniowie[0].imie;
```

## Przykład 1 - lista uczniów

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Uczen
{
    string imie;
    int punkty;
};

int main()
{
    int n;
    cin >> n;

    vector<Uczen> uczniowie;

    for (int i = 0; i < n; i++)
    {
        Uczen uczen;
        cin >> uczen.imie >> uczen.punkty;
        uczniowie.push_back(uczen);
    }

    for (const Uczen &uczen : uczniowie)
    {
        cout << uczen.imie << " - " << uczen.punkty << "\n";
    }

    if (!uczniowie.empty())
    {
        int indeksNajlepszego = 0;

        for (int i = 1; i < (int)uczniowie.size(); i++)
        {
            if (uczniowie[i].punkty > uczniowie[indeksNajlepszego].punkty)
            {
                indeksNajlepszego = i;
            }
        }

        cout << "Najlepszy wynik: " << uczniowie[indeksNajlepszego].imie << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
3
Anna 78
Jan 64
Ewa 91
```

Wynik:

```text
Anna - 78
Jan - 64
Ewa - 91
Najlepszy wynik: Ewa
```

</details>

## Omówienie programu krok po kroku

1. `struct Uczen` opisuje rekord.
2. `vector<Uczen> uczniowie;` tworzy pustą listę rekordów.
3. Program wczytuje ucznia do zmiennej pomocniczej.
4. `push_back()` dopisuje cały rekord.
5. Pętla przechodzi przez rekordy przez stałą referencję.
6. Największy wynik znajduje się przez zapamiętanie indeksu.

## Przykład 2 - zmiana pola

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Produkt
{
    string nazwa;
    double cena;
};

int main()
{
    vector<Produkt> produkty = { {"zeszyt", 4.5}, {"dlugopis", 3.0} };

    produkty[0].cena = 5.0;

    for (const Produkt &produkt : produkty)
    {
        cout << produkt.nazwa << " " << produkt.cena << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
zeszyt 5
dlugopis 3
```

</details>

## Kiedy tego użyć?

Użyj `vector` struktur, gdy liczba rekordów może się zmieniać: uczniowie, produkty, książki, zawodnicy, pomiary.

## Kiedy wybrać coś innego?

Jeżeli liczba rekordów jest stała i mała, tablica struktur może wystarczyć. Jeżeli dane nie mają nazwanych pól, czasami wystarczy `vector<int>` albo `vector<double>`.

## Typowe błędy

- Próba użycia `uczniowie.imie` zamiast `uczniowie[i].imie`.
- Brak sprawdzenia, czy `vector` nie jest pusty przed szukaniem maksimum.
- Kopiowanie dużych rekordów w pętli zamiast użycia `const Uczen &`.
- Mylenie pól różnych struktur.
- Używanie `pair`, gdy struktura byłaby czytelniejsza.

## Ćwiczenia

### Ćwiczenie 1

Utwórz `vector` produktów i wypisz ich dane.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Zdefiniuj strukturę `Produkt` z polami `nazwa` i `cena`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Produkt
{
    string nazwa;
    double cena;
};

int main()
{
    vector<Produkt> produkty = { {"zeszyt", 4.5}, {"gumka", 2.0} };

    for (const Produkt &produkt : produkty)
    {
        cout << produkt.nazwa << " " << produkt.cena << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 2

Wczytaj książki: tytuł bez spacji i rok. Policz książki po 2000 roku.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj licznika i pola `rok`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Ksiazka
{
    string tytul;
    int rok;
};

int main()
{
    int n;
    cin >> n;
    vector<Ksiazka> ksiazki;

    for (int i = 0; i < n; i++)
    {
        Ksiazka ksiazka;
        cin >> ksiazka.tytul >> ksiazka.rok;
        ksiazki.push_back(ksiazka);
    }

    int licznik = 0;
    for (const Ksiazka &ksiazka : ksiazki)
    {
        if (ksiazka.rok > 2000) licznik++;
    }

    cout << licznik << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 3

Znajdź zawodnika z największą liczbą punktów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zapamiętaj indeks najlepszego zawodnika.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Zawodnik
{
    string imie;
    int punkty;
};

int main()
{
    vector<Zawodnik> zawodnicy = { {"Ola", 12}, {"Adam", 20}, {"Ewa", 17} };
    int indeks = 0;

    for (int i = 1; i < (int)zawodnicy.size(); i++)
    {
        if (zawodnicy[i].punkty > zawodnicy[indeks].punkty) indeks = i;
    }

    cout << zawodnicy[indeks].imie << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 4

Wczytaj pomiary: nazwę miejsca bez spacji i temperaturę. Wypisz miejsca z temperaturą dodatnią.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Pole temperatury porównaj z zerem.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Pomiar
{
    string miejsce;
    double temperatura;
};

int main()
{
    vector<Pomiar> pomiary = { {"dom", 21.5}, {"dwor", -2.0}, {"sala", 19.0} };

    for (const Pomiar &pomiar : pomiary)
    {
        if (pomiar.temperatura > 0)
        {
            cout << pomiar.miejsce << "\n";
        }
    }

    return 0;
}
```

</details>

### Ćwiczenie 5

Wczytaj uczniów i podnieś każdemu wynik o 1 punkt.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Do zmiany pól użyj pętli z referencją `Uczen &uczen`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct Uczen
{
    string imie;
    int punkty;
};

int main()
{
    vector<Uczen> uczniowie = { {"Anna", 78}, {"Jan", 64} };

    for (Uczen &uczen : uczniowie)
    {
        uczen.punkty++;
    }

    for (const Uczen &uczen : uczniowie)
    {
        cout << uczen.imie << " " << uczen.punkty << "\n";
    }

    return 0;
}
```

</details>

## Podsumowanie

`vector` struktur pozwala przechowywać zmienną liczbę rekordów. To naturalny wybór, gdy każdy element ma kilka nazwanych pól.
