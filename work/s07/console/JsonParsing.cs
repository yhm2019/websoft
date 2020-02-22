using System;

namespace JsonParsing{
    class Account
    {
        public int number;
        public int balance;
        public string label;
        public string owner;

        public override string ToString() {
            return string.Fromat("Number:{0}, Balance:{1}, Label:{2}, Owner:{3}", number, balance, label, owner):
	}
    }
}
