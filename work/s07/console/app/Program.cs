using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.Data;

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
            Boolean exit;
            
            do
            {
                Console.WriteLine("***************************************");
                Console.WriteLine("        1.View acccounts               ");
                Console.WriteLine("        2.View account by number       ");
                Console.WriteLine("        3.Exit                         ");
                Console.WriteLine("***************************************");
                choice = int.Parse(Console.ReadLine());
                exit = false;
                var accounts = ReadAccounts();
                switch (choice)
                {
                    case 1:
                        
                        Console.WriteLine("+------------+------------+------------+------------+");
                        Console.WriteLine("|   Number   |  Balance   |    Label   |    Owner   |");
                        foreach (var account in accounts)
                        {
                            string numberStr = "";
                            string balanceStr = "";
                            string labelStr = "";
                            string ownerStr = "";
                            //Number
                            for(int i = 0; i < ((11 - account.Number.ToString().Length)/2); i ++)
                                {
                                numberStr += " ";
                            }
                            numberStr += account.Number.ToString();
                            for(int i = (11 - numberStr.Length); i >= 0 ; i --)
                                {
                                numberStr += " ";
                            }
                            //Balance
                            for(int i = 0; i < ((11 - account.Balance.ToString().Length)/2); i ++)
                                {
                                balanceStr += " ";
                            }
                            balanceStr += account.Balance.ToString();
                            for(int i = (11 - balanceStr.Length); i >= 0 ; i --)
                                {
                                balanceStr += " ";
                            }
                            //Label
                            for(int i = 0; i < ((11 - account.Label.ToString().Length)/2); i ++)
                                {
                                labelStr += " ";
                            }
                            labelStr += account.Label.ToString();
                            for(int i =  (11 - labelStr.Length); i >= 0; i --)
                                {
                                labelStr += " ";
                            }
                            //Owner
                            for(int i = 0; i < ((11 - account.Owner.ToString().Length)/2); i ++)
                                {
                                ownerStr += " ";
                            }
                            ownerStr += account.Owner.ToString();
                            for(int i = (11 - ownerStr.Length); i >= 0; i --)
                                {
                                ownerStr += " ";
                            }
                           Console.Write("|" + numberStr + "|" + balanceStr + "|" + labelStr + "|" + ownerStr + "|" + "\n");
                           Console.WriteLine("+------------+------------+------------+------------+");
                           // Console.WriteLine(account);
                        }
                        break;
                    case 2:
                        int count = 0;
                        Console.WriteLine("Please enter the ID:");
                        var num = int.Parse(Console.ReadLine());
                        Console.WriteLine("+------------+------------+------------+------------+");
                        Console.WriteLine("|   Number   |  Balance   |    Label   |    Owner   |");
                        foreach (var account in accounts)
                        {
                            if (account.Number == num)
                            {
                                string numberStr = "";
                                string balanceStr = "";
                                string labelStr = "";
                                string ownerStr = "";
                                //Number
                                for(int i = 0; i < ((11 - account.Number.ToString().Length)/2); i ++)
                                {
                                    numberStr += " ";
                                }
                                numberStr += account.Number.ToString();
                                for(int i = (11 - numberStr.Length); i >= 0 ; i --)
                                {
                                    numberStr += " ";
                                }
                                //Balance
                                for(int i = 0; i < ((11 - account.Balance.ToString().Length)/2); i ++)
                                {
                                    balanceStr += " ";
                                }
                                balanceStr += account.Balance.ToString();
                                for(int i = (11 - balanceStr.Length); i >= 0 ; i --)
                                {
                                    balanceStr += " ";
                                }
                                //Label
                                for(int i = 0; i < ((11 - account.Label.ToString().Length)/2); i ++)
                                {
                                    labelStr += " ";
                                }
                                labelStr += account.Label.ToString();
                                for(int i =  (11 - labelStr.Length); i >= 0; i --)
                                {
                                    labelStr += " ";
                                }
                                //Owner
                                for(int i = 0; i < ((11 - account.Owner.ToString().Length)/2); i ++)
                                {
                                    ownerStr += " ";
                                }
                                ownerStr += account.Owner.ToString();
                                for(int i = (11 - ownerStr.Length); i >= 0; i --)
                                {
                                    ownerStr += " ";
                                }
                                Console.Write("|" + numberStr + "|" + balanceStr + "|" + labelStr + "|" + ownerStr + "|" + "\n");
                                Console.WriteLine("+------------+------------+------------+------------+");
                            }
                            else
                                count ++;
                        }
                        if(count >= 4)
                            Console.WriteLine("Id number does not exit!");
                        break;
                    case 3:
                        exit = true;
                        break;
                    default:
                        Console.WriteLine("Wrong number!\n");
                        break;
                }

            } while (!exit);
        }
      
        static void Main(string[] args)
        {
            menu();
        }
    }
}
