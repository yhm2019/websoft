using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        public class Account
        {
            public int Number { get; set; }
            public int Balance { get; set; }
            public string Label { get; set; }
            public int Owner { get; set; }

            public override string ToString()
            {
                return JsonSerializer.Serialize<Account>(this);
            }
        }
        static IEnumerable<Account> ReadAccounts()
        {
            String file = "../../../data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
            }
        }
        public static void menu()
        {
            int choice;
            do
            {
                Console.WriteLine("***************************************");
                Console.WriteLine("        1.View acccounts               ");
                Console.WriteLine("        2.View account by number       ");
                Console.WriteLine("        3.Exit                         ");
                Console.WriteLine("***************************************");
                choice = int.Parse(Console.ReadLine());
                switch (choice)
                {
                    case 1:
                        var accounts = ReadAccounts();
                        foreach (var account in accounts)
                        {
                            Console.WriteLine(account);
                        }
                        break;
                    case 2:
                        var num = int.Parse(Console.ReadLine());
                        accounts = ReadAccounts();
                        foreach (var account in accounts)
                        {
                            if (account.Number == num)
                                Console.WriteLine(account);
                        }
                        break;
                }

            } while (choice != 3);
        }
        static void Main(string[] args)
        {
            menu();
        }
    }
}
