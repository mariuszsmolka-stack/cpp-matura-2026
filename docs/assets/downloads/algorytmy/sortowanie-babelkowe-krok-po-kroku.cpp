#include <iostream>
#include <limits>
#include <sstream>
#include <string>
#include <vector>
using namespace std;

bool wczytajCalkowita(int& liczba) {
    string tekst;
    if (!(cin >> tekst)) {
        return false;
    }
    istringstream wejscie(tekst);
    return (wejscie >> liczba) && wejscie.eof();
}

void wyswietlLiczby(const vector<int>& liczby) {
    for (int liczba : liczby) {
        cout << liczba << ' ';
    }
    cout << '\n';
}

bool czekajNaEnter() {
    cout << "Nacisnij Enter, aby pokazac kolejny krok." << endl;
    string wiersz;
    return bool(getline(cin, wiersz));
}

void sortujBabelkowoKrokPoKroku(vector<int>& liczby) {
    int rozmiar = liczby.size();
    int numerPorownania = 0;
    for (int przejscie = 0; przejscie < rozmiar - 1; przejscie++) {
        for (int j = 0; j < rozmiar - 1 - przejscie; j++) {
            if (!czekajNaEnter()) {
                cout << "Koniec wejscia. Przerwano prezentacje.\n";
                return;
            }
            numerPorownania++;
            cout << "Przejscie " << przejscie + 1
                 << ", porownanie " << numerPorownania << '\n';
            cout << "Indeksy: " << j << " i " << j + 1 << '\n';
            cout << "Wartosci: " << liczby[j] << " i " << liczby[j + 1] << '\n';
            if (liczby[j] > liczby[j + 1]) {
                int pomocnicza = liczby[j];
                liczby[j] = liczby[j + 1];
                liczby[j + 1] = pomocnicza;
                cout << "Zamiana: tak.\n";
            } else {
                cout << "Zamiana: nie.\n";
            }
            cout << "Aktualny zbior: ";
            wyswietlLiczby(liczby);
        }
        cout << "Koniec przejscia " << przejscie + 1
             << ". Gotowa czesc od indeksu " << rozmiar - 1 - przejscie << ".\n";
    }
    cout << "Sortowanie zakonczone. Uporzadkowany zbior: ";
    wyswietlLiczby(liczby);
}

int main() {
    cout << "Podaj liczbe elementow (2-10): " << flush;
    int rozmiar;
    if (!wczytajCalkowita(rozmiar) || rozmiar < 2 || rozmiar > 10) {
        cout << "Blad: podaj liczbe calkowita od 2 do 10.\n";
        return 1;
    }
    vector<int> liczby(rozmiar);
    cout << "Podaj " << rozmiar << " liczb calkowitych oddzielonych spacjami: " << flush;
    for (int& liczba : liczby) {
        if (!wczytajCalkowita(liczba)) {
            cout << "Blad: oczekiwano liczby calkowitej.\n";
            return 1;
        }
    }
    // Usuwamy reszte wiersza po danych, aby pierwszy krok czekal na nowy Enter.
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    cout << "Dane poczatkowe: ";
    wyswietlLiczby(liczby);
    sortujBabelkowoKrokPoKroku(liczby);
}
