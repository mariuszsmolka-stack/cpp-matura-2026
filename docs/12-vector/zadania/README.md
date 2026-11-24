---
layout: default
title: Zbiór zadań z vector
permalink: /12-vector/zadania/
---

# Zbiór zadań z vector

Potrafisz już zapisywać elementy w `vector`. Teraz połączysz te operacje w rozwiązania konkretnych problemów. Czeka na ciebie 15 zadań: od zamiany dwóch wartości do raportów o pomiarach, zawodnikach i produktach.

To dodatkowy zbiór ćwiczeń do rozdziału 12. Nie zastępuje lekcji teoretycznych. Zadania rozwijają umiejętności przydatne podczas przygotowań do matury rozszerzonej: dokładne czytanie formatu danych, dobór indeksów, analizę ciągów i sprawdzanie wyników. Są to zadania autorskie, a nie zadania z arkusza CKE.

## Trzy poziomy

- [Podstawy i indeksy - zadania 1-5]({{ '/12-vector/zadania/01-podstawy-i-indeksy.html' | relative_url }}): konkretne miejsca, sąsiedzi i fragmenty ciągu.
- [Przetwarzanie i zmiana danych - zadania 6-10]({{ '/12-vector/zadania/02-przetwarzanie-i-zmiana-danych.html' | relative_url }}): przesuwanie, filtrowanie, rozbudowa danych i obsługa poleceń.
- [Zadania z plikami danych - zadania 11-15]({{ '/12-vector/zadania/03-zadania-z-plikami-danych.html' | relative_url }}): kilka pytań o jeden większy zestaw danych, struktury i plansza.

Przed ostatnim poziomem wróć w razie potrzeby do lekcji o [wektorze struktur]({{ '/12-vector/06-vector-struktur.html' | relative_url }}) i [wektorze dwuwymiarowym]({{ '/12-vector/07-vector-dwuwymiarowy.html' | relative_url }}).

## Jak pracować?

- Najpierw opisz własnymi słowami, co program ma dostać i co ma wypisać.
- Rozpisz mały przykład na kartce. Oddziel indeksy od wartości.
- Napisz własny program w C++23. Dane pobieraj przez `cin`, a wyniki wypisuj przez `cout`.
- Rozwiń wynik przykładu i porównaj go ze swoim. Wyniki, wskazówki i rozwiązania są domyślnie ukryte.
- Jeśli utkniesz, otwórz tylko wskazówkę. Nie zawiera gotowego kodu.
- Pełne rozwiązanie otwórz po własnej próbie. Każdy blok C++ jest osobnym programem z `main()`.
- Sprawdź najmniejsze wejście, powtórzenia i sytuację bez pasujących elementów. Zajrzyj do uwag o typowych błędach oraz do pracy z debuggerem na końcu każdego zestawu.

Przyjmujemy, że dane spełniają ograniczenia zadania. Program nie musi pytać o dane dodatkowymi komunikatami. Indeksy liczymy od zera. Nie zastępuj własnych pętli gotowymi algorytmami bibliotecznymi.

## Jakie umiejętności ćwiczysz?

| Zadanie | Główna umiejętność | Co otrzymujesz? |
| --- | --- | --- |
| 1. Zamiana oznaczonych elementów | Indeks a wartość, zmienna pomocnicza | Zmieniony kontener |
| 2. Odbicie lustrzane | Porównywanie par od obu końców | Odpowiedź o symetrii |
| 3. Najdłuższy rosnący fragment | Bieżąca seria i zapamiętany rekord | Długość spójnego fragmentu |
| 4. Lokalne szczyty | Dwa sąsiedztwa i granice pętli | Indeksy szczytów |
| 5. Kompresja kolejnych powtórzeń | Rozpoznawanie grup, budowa nowego kontenera | Kolejne różne stany |
| 6. Przesunięcie cykliczne | Kolejność nadpisywania, zmiana przez referencję | Przesunięty kontener |
| 7. Stabilne usuwanie wartości | Filtrowanie z zachowaniem kolejności | Wektor bez wskazanej wartości |
| 8. Dodawanie znacznika alarmu | Jeden lub dwa zapisy dla jednego odczytu | Rozszerzony dziennik |
| 9. Plan i wykonanie | Równoległe indeksy, wielkość odchylenia | Różnice i indeks największej zmiany |
| 10. Kolejka zgłoszeń | Polecenia, napisy, początek i koniec listy | Kolejka i komunikaty obsługi |
| 11. Pomiary temperatury | Łączenie statystyk i analizy zmian | Raport temperatur |
| 12. Zużycie energii | Próg zależny od całych danych, lista indeksów | Godziny ponad średnią i zakres zużycia |
| 13. Wyniki biegu | Wybór dwóch rekordów bez sortowania, remisy | Dwaj najlepsi i wyniki blisko zwycięzcy |
| 14. Kontrola magazynu | Wybór całych struktur i suma niedoborów | Lista uzupełnień |
| 15. Analiza planszy | Oddzielne wymiary i sumy w dwóch kierunkach | Wiersz, kolumna, zera i przekątna |

## Dane do pobrania

- [temperatury.txt - zadanie 11]({{ '/assets/downloads/vector/temperatury.txt' | relative_url }})
- [zuzycie-energii.txt - zadanie 12]({{ '/assets/downloads/vector/zuzycie-energii.txt' | relative_url }})
- [wyniki-biegu.txt - zadanie 13]({{ '/assets/downloads/vector/wyniki-biegu.txt' | relative_url }})
- [stan-magazynu.txt - zadanie 14]({{ '/assets/downloads/vector/stan-magazynu.txt' | relative_url }})
- [plansza.txt - zadanie 15]({{ '/assets/downloads/vector/plansza.txt' | relative_url }})
- [Wszystkie pięć plików w archiwum dane-vector.zip]({{ '/assets/downloads/vector/dane-vector.zip' | relative_url }})

Zapisz plik obok skompilowanego programu. Archiwum najpierw rozpakuj. Pliki nie zawierają opisów ani nagłówków tekstowych: zaczynają się od liczby rekordów, a plansza od dwóch wymiarów.

Możesz otworzyć plik w edytorze, skopiować całość i wkleić do konsoli programu. W razie potrzeby zatwierdź ostatni wiersz klawiszem Enter. Drugim sposobem jest przekierowanie standardowego wejścia. W `cmd.exe` uruchom:

```text
program.exe < nazwa-pliku.txt
```

Na przykład dla temperatur wpisz `program.exe < temperatury.txt`. Jeśli używasz PowerShell, najpierw otwórz `cmd` w katalogu z plikami. Program nadal czyta przez `cin`. Zmienia się tylko źródło danych: plik zamiast klawiatury. Nie potrzebujesz jeszcze operacji plikowych w kodzie C++.

## Kiedy tego użyć?

Wróć do zbioru po poznaniu rozdziału 12 lub przed większym zadaniem wymagającym samodzielnego połączenia kilku operacji na danych.

## Kiedy wybrać coś innego?

Jeśli nie pamiętasz działania `push_back()`, `insert()` albo przekazywania przez referencję, najpierw wróć do odpowiedniej [lekcji rozdziału 12]({{ '/12-vector/' | relative_url }}). Tutaj ćwiczysz ich zastosowanie.
