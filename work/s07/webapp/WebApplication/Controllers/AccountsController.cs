using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Services;
using WebApplication.Models;

using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        public JsonFileAccount AccountService { get; }

        public AccountsController(JsonFileAccount accountService)
        {
            AccountService = accountService;
        }

        [HttpGet]
        public IEnumerable<Account> Get()
        {
            return AccountService.GetAccounts();
        }
        [HttpGet("{number}")]
        public IActionResult GetAccount(int number)
        {
            var accounts = AccountService.GetAccounts();
            foreach (var account in accounts)
            {
                if (account.Number == number)
                    return Ok(account);
            }
            return Ok("{\"error\": Account " + number + " does not exist}");
        }
       
    }

}