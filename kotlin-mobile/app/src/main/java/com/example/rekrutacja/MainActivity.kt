package com.example.rekrutacja


import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.rekrutacja.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.button.setOnClickListener {
            onButtonClick()
        }

        binding.btnClick.setOnClickListener {
            onYourButtonClick()
        }

    }

    /*1.TODO Pierwszym z zadań jest implementacja metody, w taki sposób, aby
            kliknięcie przycisku powodowało otwarcie activity SecondActivity, gdy
            wpisanym przez użytnika tekstem jest 'AKAI'.
            Kolejne zadanie znajdziesz w pliku activity_main.xml.

            Podpowiedź poczytaj o Intent.
     */
    private fun onButtonClick() {
        binding.textView.text = binding.editText.text.toString()
        if (binding.editText.text.toString().uppercase() == "AKAI") {
            val intent: Intent = SecondActivity.newIntent(this@MainActivity)
            startActivity(intent)
        } else {
            Toast.makeText(this, "Wpisz AKAI", Toast.LENGTH_SHORT).show()
        }
    }

    /*2.b TODO Druga część tego zadania polega na implementacji metody, która zmienia
            wszyskie literzy we wpisanym przez użytkownika tekscie na wielkie i
            wstawienie przerobionego tekstu do textView. Nie zapomnij dodać do metody
            OnCreate() OnClickListenera słuchającego na kliknięcia wstawionego przez Ciebie
            przycisku.
            Kolejne zadanie czeka na Ciebie w pliku SecondActivity
     */
    private fun onYourButtonClick() {
        val text : String = binding.editText.text.toString().uppercase()
        binding.textView.text = text
       // binding.textView.text = "sdfd"
    }
}
