using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace WebApplication.Models
{
    public class WebsoftContext
    {
        public string ConnectionString { get; set; }

        public WebsoftContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
        public List<Account> GetAllAccounts()
        {
            List<Account> list = new List<Account>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM account", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new Account()
                        {
                            Number = reader.GetInt32("Number"),
                            Balance = reader.GetInt32("Balance"),
                            Label = reader.GetString("Label"),
                            Owner = reader.GetInt32("Owner")
                        });
                    }
                }
            }
            return list;
        }
        
    }
}