---
layout: default
title: Punkty przerwania
---

# Punkty przerwania

## Cel lekcji

Nauczysz się zatrzymywać program w wybranym miejscu i kontynuować jego działanie do kolejnego punktu przerwania.

## Krótkie wprowadzenie do problemu

Zwykłe uruchomienie programu pokazuje tylko końcowy efekt. Debugger pozwala zatrzymać program w środku działania.

Dzięki temu możesz zobaczyć, co program zrobił do tej chwili i co dopiero ma wykonać.

## Czym jest punkt przerwania?

Punkt przerwania to znak postawiony przy wierszu programu. Mówi debuggerowi: zatrzymaj program, gdy wykonanie dojdzie do tego miejsca.

W Code::Blocks punkt przerwania można zwykle dodać kliknięciem na lewym marginesie edytora, obok numeru wiersza. Można też użyć polecenia `Debug -> Toggle breakpoint`.

Tym samym poleceniem lub ponownym kliknięciem w margines można punkt przerwania usunąć.

Możesz ustawić kilka punktów przerwania. Wtedy program zatrzyma się na pierwszym z nich, a po kontynuowaniu działania zatrzyma się na następnym.

## Przygotowanie projektu

Przed rozpoczęciem:

1. Otwórz projekt Code::Blocks.
2. Upewnij się, że aktywna konfiguracja to `Debug`.
3. Zbuduj projekt.
4. Ustaw punkt przerwania.
5. Uruchom program w debuggerze poleceniem z menu `Debug -> Start / Continue`.

Nie debuguj luźnego pliku `.cpp`, który nie należy do projektu. Taki plik może uruchamiać się normalnie, ale debugger może działać nieprzewidywalnie.

## Program do ćwiczeń

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

## Gdzie ustawić punkty przerwania?

Ustaw pierwszy punkt przerwania przy wierszu:

```cpp
int koszt = cena * liczbaSztuk;
```

Program zatrzyma się przed obliczeniem zmiennej `koszt`. W tym momencie zmienne `cena` i `liczbaSztuk` powinny mieć już wartości `12` i `4`, a `koszt` może jeszcze nie mieć poprawnej wartości.

Ustaw drugi punkt przerwania przy wierszu:

```cpp
cout << "Koszt: " << koszt << '\n';
```

Program zatrzyma się przed wypisaniem wyniku. Wtedy `koszt` powinien mieć wartość `48`.

## Co oznacza podświetlony wiersz?

Podświetlony wiersz zwykle jest następną instrukcją do wykonania. Jeżeli program zatrzymał się przy obliczeniu `koszt`, to obliczenie najczęściej jeszcze się nie wykonało.

Dopiero po przejściu do następnego wiersza wartość `koszt` powinna się zmienić.

## Kontynuowanie programu

Gdy program zatrzyma się na pierwszym punkcie przerwania, możesz użyć polecenia `Debug -> Start / Continue`. Program ruszy dalej i zatrzyma się przy następnym punkcie przerwania albo zakończy działanie.

Sesję debugowania możesz zakończyć poleceniem `Debug -> Stop debugger`.

## Kiedy tego użyć?

Punktu przerwania używaj wtedy, gdy wiesz, który fragment programu chcesz sprawdzić.

Nie musisz przechodzić przez cały program od początku. Możesz zatrzymać go dokładnie tam, gdzie dzieje się coś ważnego.

## Kiedy wybrać coś innego?

Jeżeli chcesz tylko szybko zobaczyć wynik programu, zwykłe uruchomienie wystarczy. Debugger jest potrzebny wtedy, gdy wynik jest błędny albo chcesz zrozumieć przebieg programu.

## Ćwiczenia

### Ćwiczenie 1

Ustaw jeden punkt przerwania przy obliczeniu zmiennej `koszt`. Uruchom program w debuggerze i sprawdź wartości `cena` oraz `liczbaSztuk`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Kliknij na marginesie obok wiersza `int koszt = cena * liczbaSztuk;`. Potem uruchom program w debuggerze.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: wiersz `int koszt = cena * liczbaSztuk;`,
- przed wykonaniem tego wiersza: `cena = 12`, `liczbaSztuk = 4`,
- po wykonaniu tego wiersza: `koszt = 48`.

</details>

### Ćwiczenie 2

Ustaw dwa punkty przerwania: przed obliczeniem `koszt` i przed instrukcją `cout`. Uruchom program i przejdź od pierwszego punktu do drugiego przez kontynuowanie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Po zatrzymaniu na pierwszym punkcie użyj polecenia `Debug -> Start / Continue`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- pierwszy punkt przerwania: `int koszt = cena * liczbaSztuk;`,
- drugi punkt przerwania: `cout << "Koszt: " << koszt << '\n';`,
- przy drugim punkcie: `koszt = 48`,
- instrukcja `cout` dopiero ma wypisać wynik.

</details>

### Ćwiczenie 3

Usuń punkt przerwania przy obliczeniu `koszt`, zostaw tylko punkt przy instrukcji `cout` i uruchom program ponownie w debuggerze.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Kliknij ponownie na marginesie przy pierwszym punkcie przerwania albo użyj `Debug -> Toggle breakpoint`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- aktywny punkt przerwania: tylko wiersz z `cout`,
- program nie zatrzymuje się wcześniej,
- przy zatrzymaniu `koszt` ma już wartość `48`.

</details>

### Ćwiczenie 4

Przed wykonaniem instrukcji obliczającej `koszt` przewidź wartość, którą zmienna otrzyma po wykonaniu tej instrukcji.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zatrzymaj program przed obliczeniem `koszt`. Pomnóż ręcznie `cena` przez `liczbaSztuk`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- przed wykonaniem instrukcji: `cena = 12`, `liczbaSztuk = 4`,
- przewidywana wartość: `48`,
- po wykonaniu instrukcji: `koszt = 48`.

</details>

### Ćwiczenie 5

Znajdź błąd logiczny w programie. Program powinien obliczyć koszt zakupów, ale wynik jest zbyt mały.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Ustaw punkt przerwania przy obliczeniu `koszt`. Sprawdź, czy program mnoży cenę przez liczbę sztuk.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena + liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: wiersz `int koszt = cena + liczbaSztuk;`,
- przed wykonaniem: `cena = 12`, `liczbaSztuk = 4`,
- po wykonaniu: `koszt = 16`,
- oczekiwany koszt to `48`, więc błąd jest w operatorze `+`, który powinien być operatorem `*`.

Poprawna instrukcja:

```cpp
int koszt = cena * liczbaSztuk;
```

</details>

## Podsumowanie

Punkt przerwania zatrzymuje program w wybranym miejscu. Podświetlony wiersz zwykle dopiero ma zostać wykonany. Kontynuowanie pozwala przejść do następnego punktu przerwania lub do końca programu.
