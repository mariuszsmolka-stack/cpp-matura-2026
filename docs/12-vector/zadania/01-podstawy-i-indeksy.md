---
layout: default
title: "Zadania z vector - podstawy i indeksy"
---

# Podstawy i indeksy

Najpierw ćwiczysz wybieranie miejsc w kontenerze. Potem porównujesz sąsiadów i rozpoznajesz całe fragmenty danych.

[Wróć do zbioru zadań]({{ '/12-vector/zadania/' | relative_url }})

W każdym zadaniu przyjmij, że wejście spełnia ograniczenia. Indeksy liczymy od `0`. Liczby w wynikowej liście oddzielaj spacjami. Dodatkowa spacja na końcu wiersza nie ma znaczenia. Programy pisz w C++23.

## Zadanie 1 - Zamiana oznaczonych elementów

W zestawieniu pomiarów dwie wartości trafiły na niewłaściwe miejsca. Znasz oba indeksy. Zamień wskazane elementy i wypisz cały `vector`. Użyj zmiennej pomocniczej. Nie korzystaj z `swap()`.

### Dane wejściowe

- Pierwszy wiersz: liczba elementów `n`, od `1` do `10000`.
- Drugi wiersz: `n` liczb całkowitych od `-1000000` do `1000000`.
- Trzeci wiersz: dwa indeksy od `0` do `n - 1`. Mogą być takie same.

### Wynik

Jeden wiersz ze wszystkimi wartościami po zamianie.

### Przykład wejścia

```text
5
12 8 -3 20 6
1 4
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 1</summary>

```text
12 6 -3 20 8
```

Indeksy `1` i `4` wskazują wartości `8` i `6`. Zamieniamy wartości, a nie numery miejsc.

</details>

### Kiedy tego użyć?

Gdy trzeba poprawić położenie dwóch zapisów bez zmiany pozostałych elementów.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 1</summary>

Po pierwszym przypisaniu jedna z pierwotnych wartości zniknie ze swojego miejsca. Gdzie możesz ją zachować do czasu drugiego przypisania? Sprawdź też przypadek dwóch takich samych indeksów.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 1</summary>

Zapisujemy pierwszą wartość na boku. W jej miejsce wpisujemy drugą. Dopiero potem wykorzystujemy zapamiętaną wartość.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> liczby[indeks];
    }

    int pierwszyIndeks, drugiIndeks;
    cin >> pierwszyIndeks >> drugiIndeks;
    int zapamietana = liczby[pierwszyIndeks];
    liczby[pierwszyIndeks] = liczby[drugiIndeks];
    liczby[drugiIndeks] = zapamietana;

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowy błąd:** dwa przypisania bez zmiennej pomocniczej zapisują tę samą wartość w obu miejscach.

</details>

## Zadanie 2 - Odbicie lustrzane

Wzór na pasku ma wyglądać tak samo z obu stron. Sprawdź, czy liczby w `vector` czytane od lewej i od prawej tworzą ten sam ciąg. Nie odwracaj kontenera ani nie używaj gotowej funkcji odwracającej.

### Dane wejściowe

- Liczba elementów `n`, od `0` do `10000`.
- Następnie `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Wypisz `TAK`, jeśli ciąg jest symetryczny, albo `NIE` w przeciwnym przypadku. Pusty ciąg i ciąg jednoelementowy uznaj za symetryczne.

### Przykład wejścia

```text
5
4 7 2 7 4
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 2</summary>

```text
TAK
```

Skrajne wartości to `4` i `4`. Kolejna para to `7` i `7`. Środkowy element nie potrzebuje pary.

</details>

### Kiedy tego użyć?

Tak można sprawdzać symetrię wzorów oraz ciągów liczb bez tworzenia ich odwróconej kopii.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 2</summary>

Pierwsze miejsce porównaj z ostatnim, drugie z przedostatnim. Zapisz prawy indeks za pomocą liczby elementów i lewego indeksu. Wystarczy dojść do połowy. Czy dla pustego wejścia pętla musi wykonać choć jeden odczyt?

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 2</summary>

Funkcja tylko czyta `vector`, więc otrzymuje stałą referencję. Pierwsza różna para wystarcza do zwrócenia `false`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

bool czySymetryczny(const vector<int> &liczby)
{
    int liczbaElementow = liczby.size();
    for (int lewyIndeks = 0; lewyIndeks < liczbaElementow / 2; lewyIndeks++)
    {
        int prawyIndeks = liczbaElementow - 1 - lewyIndeks;
        if (liczby[lewyIndeks] != liczby[prawyIndeks])
        {
            return false;
        }
    }
    return true;
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

    if (czySymetryczny(liczby))
    {
        cout << "TAK\n";
    }
    else
    {
        cout << "NIE\n";
    }
    return 0;
}
```

**Typowy błąd:** prawy indeks równy `liczbaElementow - lewyIndeks` wychodzi poza kontener już przy pierwszym porównaniu.

</details>

## Zadanie 3 - Najdłuższy rosnący fragment

Podczas treningu zapisujesz kolejne wyniki. Interesuje cię najdłuższa seria prób, w której każda następna wartość jest większa od poprzedniej. Wyznacz długość takiego spójnego fragmentu.

Nie wolno pomijać elementów. Równa wartość kończy serię tak samo jak spadek.

### Dane wejściowe

- Liczba wyników `n`, od `0` do `10000`.
- Potem `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Jedna liczba: długość najdłuższego ściśle rosnącego fragmentu. Dla pustego wejścia wypisz `0`.

### Przykład wejścia

```text
8
3 5 8 2 4 6 9 1
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 3</summary>

```text
4
```

Fragment `2 4 6 9` obejmuje cztery sąsiednie elementy. Po nim następuje spadek do `1`.

</details>

### Kiedy tego użyć?

Gdy szukasz nieprzerwanej poprawy, na przykład kolejnych coraz lepszych wyników.

### Kiedy wybrać coś innego?

Jeśli wolno pomijać elementy, szukasz podciągu. To inne zadanie. Jeśli równe wartości mają przedłużać serię, potrzebujesz warunku braku spadku, jak w zadaniu 11.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 3</summary>

Pamiętaj dwie długości: fragmentu kończącego się w bieżącym miejscu oraz najlepszego znalezionego dotąd. Gdy wzrost się urywa, bieżący element rozpoczyna nowy fragment o długości jeden. Nie czekaj na spadek z zapamiętaniem rekordu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 3</summary>

Dla niepustego zbioru pierwszy element tworzy serię jednoelementową. Po każdej kolejnej próbie od razu sprawdzamy najlepszą długość. Dzięki temu uwzględniamy serię dochodzącą do końca danych.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> liczby[indeks];
    }
    if (liczby.empty())
    {
        cout << "0\n";
        return 0;
    }

    int biezacaDlugosc = 1;
    int najlepszaDlugosc = 1;
    for (int indeks = 1; indeks < liczbaElementow; indeks++)
    {
        if (liczby[indeks] > liczby[indeks - 1])
        {
            biezacaDlugosc++;
        }
        else
        {
            biezacaDlugosc = 1;
        }
        if (biezacaDlugosc > najlepszaDlugosc)
        {
            najlepszaDlugosc = biezacaDlugosc;
        }
    }
    cout << najlepszaDlugosc << "\n";
    return 0;
}
```

**Typowe błędy:** liczenie porównań zamiast elementów oraz użycie `>=`, które dopuszcza równe wartości.

</details>

## Zadanie 4 - Lokalne szczyty

Profil trasy opisano kolejnymi wysokościami. Znajdź miejsca wyższe jednocześnie od bezpośredniego lewego i prawego sąsiada. Wypisz ich indeksy w kolejności od lewej do prawej.

Pierwszy i ostatni element nie są kandydatami. Płaski fragment również nie tworzy szczytu.

### Dane wejściowe

- Liczba wysokości `n`, od `0` do `10000`.
- Dalej `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Jeden wiersz z indeksami szczytów. Jeśli nie ma żadnego, wypisz `BRAK`.

### Przykład wejścia

```text
7
1 5 2 4 4 0 3
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 4</summary>

```text
1
```

Wartość `5` ma dwóch niższych sąsiadów. Dwie sąsiednie wartości `4` nie są większe od siebie. Końcowa wartość `3` nie ma prawego sąsiada.

</details>

### Kiedy tego użyć?

Do wskazywania krótkich pików w pomiarach. Lokalny szczyt nie musi być najwyższą wartością całego zbioru.

### Kiedy wybrać coś innego?

Jeśli potrzebujesz jednego największego pomiaru, szukaj maksimum całego zbioru zamiast porównywać tylko sąsiadów.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 4</summary>

Ustal pierwszy i ostatni indeks, dla których istnieją oba sąsiednie miejsca. Oba porównania muszą być prawdziwe równocześnie. Zastanów się, czy przy mniej niż trzech elementach pętla powinna wejść do środka.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 4</summary>

Warunek `indeks + 1 < liczbaElementow` gwarantuje istnienie prawego sąsiada. Lewy istnieje, bo zaczynamy od indeksu `1`.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> wysokosci(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> wysokosci[indeks];
    }

    bool znaleziono = false;
    for (int indeks = 1; indeks + 1 < liczbaElementow; indeks++)
    {
        if (wysokosci[indeks] > wysokosci[indeks - 1]
            && wysokosci[indeks] > wysokosci[indeks + 1])
        {
            cout << indeks << " ";
            znaleziono = true;
        }
    }
    if (!znaleziono)
    {
        cout << "BRAK";
    }
    cout << "\n";
    return 0;
}
```

**Typowy błąd:** użycie `||` uznaje za szczyt także element większy tylko od jednego sąsiada.

</details>

## Zadanie 5 - Kompresja kolejnych powtórzeń

Rejestrator wielokrotnie zapisuje ten sam stan. Zostaw po jednym zapisie każdej kolejnej grupy jednakowych wartości. Zbuduj nowy `vector`. Zachowaj kolejność grup i nie zmieniaj danych źródłowych.

Ta sama wartość może wrócić po innej grupie. Takiego powrotu nie usuwaj.

### Dane wejściowe

- Liczba zapisów `n`, od `0` do `10000`.
- Następnie `n` liczb całkowitych od `-1000000` do `1000000`.

### Wynik

Wypisz wartości nowego kontenera w jednym wierszu. Jeśli jest pusty, wypisz `PUSTY`.

### Przykład wejścia

```text
8
4 4 4 2 2 7 4 4
```

<details markdown="1">
<summary>Pokaż wynik przykładu do zadania 5</summary>

```text
4 2 7 4
```

Ostatnia grupa `4 4` jest oddzielona od pierwszej innymi wartościami. Dlatego wynik zawiera dwie wartości `4`.

</details>

### Kiedy tego użyć?

Gdy interesują cię zmiany stanów, a nie liczba powtórzonych odczytów tego samego stanu.

### Kiedy wybrać coś innego?

Jeśli liczy się czas trwania stanu, samo pozostawienie jednej wartości gubi potrzebną informację. Wtedy trzeba zachować również długość grupy.

<details markdown="1">
<summary>Pokaż wskazówkę do zadania 5</summary>

Która wartość w budowanym wyniku mówi, jaki stan już zapisano? Pierwszy odczyt trzeba dodać bez porównania. Zanim zajrzysz na koniec wyniku, upewnij się, że coś już w nim jest.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie zadania 5</summary>

Dopisujemy liczbę, gdy wynik jest pusty albo jego ostatni element jest inny. Kolejność warunków chroni odczyt `back()` dla pustego wyniku.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    vector<int> liczby(liczbaElementow);
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        cin >> liczby[indeks];
    }

    vector<int> skrocone;
    for (int liczba : liczby)
    {
        if (skrocone.empty() || skrocone.back() != liczba)
        {
            skrocone.push_back(liczba);
        }
    }
    if (skrocone.empty())
    {
        cout << "PUSTY";
    }
    for (int liczba : skrocone)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
```

**Typowy błąd:** sprawdzanie całego dotychczasowego wyniku usuwa także późniejsze powroty tej samej wartości.

</details>

## Praca z debuggerem

W rozwiązaniu zadania 3 ustaw punkt przerwania na porównaniu z poprzednią liczbą. Prześledź wejście z przykładu. Obserwuj `indeks`, `biezacaDlugosc` i `najlepszaDlugosc`. Przed każdym krokiem przewiduj, która zmienna się zmieni. Potem użyj danych kończących się serią rosnącą.

<details markdown="1">
<summary>Pokaż wskazówkę do pracy z debuggerem</summary>

Zwróć uwagę na przejście z `8` do `2`. Bieżąca seria się kończy, ale dotychczasowy rekord nie znika.

</details>

<details markdown="1">
<summary>Pokaż omówienie pracy z debuggerem</summary>

Dla indeksów od `0` do `7` bieżące długości to `1 2 3 1 2 3 4 1`. Najlepsze długości to `1 2 3 3 3 3 4 4`. Dla wejścia `4` oraz `9 1 2 3` program zwraca `3`. Rekord aktualizuje się także w ostatnim obiegu. Pełny program znajduje się w rozwiązaniu zadania 3.

</details>

[Przejdź do przetwarzania i zmiany danych]({{ '/12-vector/zadania/02-przetwarzanie-i-zmiana-danych.html' | relative_url }})
